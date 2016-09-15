<?php
namespace Core\ZeroBundle\Twig;

use Core\ZeroBundle\Helper\Util;
use Symfony\Bridge\Doctrine\RegistryInterface;

class GlobalsExtension extends \Twig_Extension implements \Twig_Extension_GlobalsInterface
{
    /**
     * @var ContainerInterface
     */
    protected $container;
    protected $doctrine;
    protected $util;
    protected $locals = array();

    public function __construct($container)
    {
        $this->container = $container;

        $this->util = new Util;
    }

    public function getGlobals()
    {
        $admin_zero = $this->container->getParameter('admin_zero');

        $this->locals['zeroconfig'] = array(
            'title' => $admin_zero['developer'],
            'locales' => @$admin_zero['locales'],
            'js_externo' => @$admin_zero['js_externo'],
            'js_interno' => @$admin_zero['js_interno'],
            'sidebar' => $admin_zero['sidebar']
        );
        return $this->locals;
    }

    public function getName()
    {
        return 'CoreZeroBundle:GlobalsExtension';
    }
}
