<?php
namespace Core\ZeroBundle\Twig;

use Core\ZeroBundle\Helper\Util;
use Symfony\Bridge\Doctrine\RegistryInterface;

class GlobalsExtension extends \Twig_Extension
{
    /**
     * @var ContainerInterface
     */
    protected $container;

    protected $doctrine;
    protected $util;
    protected $locals = array();
    protected $request;

    public function __construct($container)
    {
        $this->container = $container;

        if ($this->container->isScopeActive('request')) {
            $this->request = $this->container->get('request');
        }
        $this->util = new Util;
    }

    public function getGlobals()
    {
        $admin_zero = $this->container->getParameter('admin_zero');

        // WebBundle:Info
        $this->locals['zeroconfig'] = array(
            'title' => $admin_zero['developer'],
            'locales' => $admin_zero['locales']
        );
        // $this->locals['contacto'] = $this->doctrine->getRepository('CoreZeroBundle:Contacto')->find(1);

        // retornando valores
        return $this->locals;
    }

    public function getName()
    {
        return 'CoreZeroBundle:GlobalsExtension';
    }
}
