<?php

namespace Core\ZeroBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Translatable\Translatable;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity
 */
class ZeroSeo
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank()
     */
    private $path;

    /**
     * @ORM\Column(length=70, nullable=true)
     */
    private $titulo;

    /**
     * @ORM\Column(length=150, nullable=true)
     */
    private $descripcion;

    /**
     * @ORM\Column(length=150, nullable=true)
     */
    private $socialTitle;

    /**
     * @ORM\Column(length=150, nullable=true)
     */
    private $socialDescripcion;

    /**
     * @ORM\Column(length=150, nullable=true)
     */
    private $socialImagen;

}
