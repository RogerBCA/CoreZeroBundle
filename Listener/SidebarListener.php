<?php

namespace Core\ZeroBundle\Listener;

use Avanzu\AdminThemeBundle\Event\SidebarMenuEvent;
use Avanzu\AdminThemeBundle\Model\MenuItemModel;
use Symfony\Component\HttpFoundation\Request;

class SidebarListener
{
    private $container;

    public function __construct($container)
    {
        $this->container = $container;
    }

    public function onSetupMenu(SidebarMenuEvent $event)
    {
        $request = $event->getRequest();

        foreach ($this->getMenu($request) as $item) {
            $event->addItem($item);
        }
    }

    static public function slugify($text)
    {
        // replace non letter or digits by -
        $text = preg_replace('~[^\pL\d]+~u', '-', $text);

        // transliterate
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

        // remove unwanted characters
        $text = preg_replace('~[^-\w]+~', '', $text);

        // trim
        $text = trim($text, '-');

        // remove duplicate -
        $text = preg_replace('~-+~', '-', $text);

        // lowercase
        $text = strtolower($text);

        if (empty($text)) {
        return 'n-a';
        }

        return $text;
    }

    /**
     * Get the sidebar menu
     *
     * @param Request $request
     * @return mixed
     */
    protected function getMenu(Request $request)
    {
        $container = $this->container;
        $admin_zero = $container->getParameter('admin_zero');

        $earg      = array();
        $rootItems = array(
            $dash = new MenuItemModel('dashboard', 'Dashboard', 'zerobundle_admin_dashboard', $earg, 'fa fa-dashboard')
            );

        if ( isset($admin_zero['sidebar']) ) {
            foreach($admin_zero['sidebar'] as $row){
                $ico = (isset($row['ico']))?$row['ico']:'terminal';
                $label = (isset($row['label']))?$row['label']:$row['model'];
                if( isset($row['type']) and $row['type'] == 'tree'){
                    $model_current = new MenuItemModel(
                                                $this->slugify($label),
                                                $label,
                                                '',
                                                $earg,
                                                'fa fa-'.$ico);
                    if ( isset($row['interno']) ) {
                        foreach ($row['interno'] as $k => $interno) {
                            $ico = (isset($interno['ico']))?$interno['ico']:'terminal';
                            $model_current->addChild(
                                new MenuItemModel(
                                    strtolower($k),
                                    $interno['label'],
                                    'zerobundle_admin_'.strtolower($k),
                                    $earg,
                                    'fa fa-'.$ico
                                )
                            );
                        }
                    }
                }else{
                    $model_current = new MenuItemModel(
                                                $this->slugify($label),
                                                $label,
                                                'zerobundle_admin_'.strtolower($row['model']),
                                                $earg,
                                                'fa fa-'.$ico
                                            );
                }
                array_push($rootItems, $model_current);
            }
        }

        return $this->activateByRoute($request->get('_route'), $rootItems);
    }

    /**
     * Set current menu item to be active
     *
     * @param $route
     * @param $items
     * @return mixed
     */
    protected function activateByRoute($route, $items) {

        foreach($items as $item) { /** @var $item MenuItemModel */
            if($item->hasChildren()) {
                $this->activateByRoute($route, $item->getChildren());
            }
            else {
                if($item->getRoute() == $route) {
                    $item->setIsActive(true);
                }
            }
        }
        return $items;
    }
}
