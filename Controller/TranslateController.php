<?php

namespace Core\ZeroBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Core\ZeroBundle\Entity\Translate;
use Core\ZeroBundle\Form\TranslateType;

/**
 * @Route("/admin-staff/Translate")
 */
class TranslateController extends Controller
{

    /**
     * Lists all Translate entities.
     *
     * @Route("/", name="zerobundle_admin_translate")
     * @Method("GET")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('CoreZeroBundle:Translate')->findAll();

        return array(
            'entities' => $entities,
        );
    }

    /**
     * Displays a form to edit an existing Translate entity.
     *
     * @Route("/{id}", name="zerobundle_admin_translate_edit")
     * @Method("GET")
     * @Template("CoreZeroBundle:Translate:form.html.twig")
     */
    public function editAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('CoreZeroBundle:Translate')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Translate entity.');
        }

        $editForm = $this->createEditForm($entity);

        return array(
            'titulo'      => 'Guardar información',
            'entity'      => $entity,
            'form'   => $editForm->createView(),
        );
    }

    /**
    * Creates a form to edit a Translate entity.
    *
    * @param Translate $entity The entity
    *
    * @return \Symfony\Component\Form\Form The form
    */
    private function createEditForm(Translate $entity)
    {
        $form = $this->createForm(new TranslateType(), $entity, array(
            'action' => $this->generateUrl('zerobundle_admin_translate_update', array('id' => $entity->getId())),
            'method' => 'PUT',
        ));

        $form->add('submit', 'submit', array('label' => 'Guardar y regresar al listado'));
        $form->add('submit2', 'submit', array('label' => 'Guardar y seguir editando'));

        return $form;
    }
    /**
     * Edits an existing Translate entity.
     *
     * @Route("/{id}", name="zerobundle_admin_translate_update")
     * @Method("PUT")
     * @Template("CoreZeroBundle:Translate:form.html.twig")
     */
    public function updateAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('CoreZeroBundle:Translate')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Translate entity.');
        }

        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {
            $em->flush();

            $request->getSession()
                ->getFlashBag()
                ->add('success', 'Se ha guardado con éxito!')
            ;

            $return = ($request->query->get('ajax') == 'true') ? array('ajax'=>'true'):array();

            $url = 'zerobundle_admin_translate';

            if ($editForm->get('submit2')->isClicked())
            {
                $url = 'zerobundle_admin_translate_edit';
                $return['id'] = $entity->getId();
            }

            return $this->redirect($this->generateUrl($url,$return));
        }

        return array(
            'titulo'      => 'Guardar información',
            'entity'      => $entity,
            'form'   => $editForm->createView()
        );
    }
}
