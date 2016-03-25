<?php
namespace Core\ZeroBundle\Form\Type;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;

class CKEditorType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array());
    }

    public function getParent()
    {
        return 'text';
    }

    public function getName()
    {
        return 'ckeditor';
    }
}
