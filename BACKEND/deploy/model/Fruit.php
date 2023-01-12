<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Fruit
 *
 * @ORM\Table(name="fruit")
 * @ORM\Entity
 */
class Fruit implements \JsonSerializable
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="smallint")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="fruit_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=20, nullable=false, options={"fixed"=true})
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="price", type="decimal", precision=10, scale=0, nullable=false)
     */
    private $price;

    /**
     * @var string|null
     *
     * @ORM\Column(name="color", type="string", length=20, nullable=true, options={"fixed"=true})
     */
    private $color;


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return Fruit
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set price.
     *
     * @param string $price
     *
     * @return Fruit
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price.
     *
     * @return string
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set color.
     *
     * @param string|null $color
     *
     * @return Fruit
     */
    public function setColor($color = null)
    {
        $this->color = $color;

        return $this;
    }

    /**
     * Get color.
     *
     * @return string|null
     */
    public function getColor()
    {
        return $this->color;
    }
	/**
	 * Specify data which should be serialized to JSON
	 * Serializes the object to a value that can be serialized natively by json_encode().
	 * @return mixed Returns data which can be serialized by json_encode(), which is a value of any type other than a resource .
	 */
	public function jsonSerialize() {
		$vars = get_object_vars($this);
        return $vars;
	}
}
