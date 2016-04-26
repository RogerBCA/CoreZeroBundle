<?php

namespace Core\ZeroBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class TranslateType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('texto')
        ;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'core_adminbundle_translate';
    }
}
