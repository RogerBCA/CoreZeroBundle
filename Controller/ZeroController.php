<?php

namespace Core\ZeroBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class ZeroController extends Controller
{
    protected $locals = array();

    /**
     * @Route("/admin-staff/", name="admin_dashboard")
     * @Template("CoreZeroBundle:Default:dashboard.html.twig")
     */
    public function dashboardAction()
    {
        return $this->locals;
    }

    /**
     * @Route("/zero/", name="formulario_ajax_reserva_home")
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
