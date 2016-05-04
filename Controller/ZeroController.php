<?php

namespace Core\ZeroBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
* @Route("/admin-staff")
*/

class ZeroController extends Controller
{
    protected $locals = array();

    /**
     * @Route("/", name="zerobundle_admin_dashboard")
     * @Template("CoreZeroBundle:Default:dashboard.html.twig")
     */
    public function dashboardAction()
    {
        return $this->locals;
    }

    /**
     * @Route("/sidebar/", name="zerobundle_admin_sidebar")
     * @Template("CoreZeroBundle:_common:_sidebar.html.twig")
     */
    public function sidebarAction($request)
    {
        $admin_zero = $this->container->getParameter('admin_zero');

        $this->locals['request'] = $request;
        $this->locals['sidebar'] = $admin_zero['sidebar'];
        return $this->locals;
    }
}
