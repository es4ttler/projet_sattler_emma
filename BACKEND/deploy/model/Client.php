<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Client
 *
 * @ORM\Table(name="client")
 * @ORM\Entity
 */
class Client implements \JsonSerializable
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="client_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="login", type="string", length=20, nullable=false, options={"fixed"=true})
     */
    private $login;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=20, nullable=false, options={"fixed"=true})
     */
    private $password;

    /**
     * @var string|null
     *
     * @ORM\Column(name="civility", type="string", length=20, nullable=true, options={"fixed"=true})
     */
    private $civility;

    /**
     * @var string|null
     *
     * @ORM\Column(name="firstname", type="string", length=20, nullable=true, options={"fixed"=true})
     */
    private $firstname;

    /**
     * @var string|null
     *
     * @ORM\Column(name="name", type="string", length=20, nullable=true, options={"fixed"=true})
     */
    private $name;

    /**
     * @var string|null
     *
     * @ORM\Column(name="address", type="string", length=50, nullable=true, options={"fixed"=true})
     */
    private $address;

    /**
     * @var string|null
     *
     * @ORM\Column(name="cp", type="decimal", precision=5, scale=0, nullable=true)
     */
    private $cp;

    /**
     * @var string|null
     *
     * @ORM\Column(name="city", type="string", length=30, nullable=true, options={"fixed"=true})
     */
    private $city;

    /**
     * @var string|null
     *
     * @ORM\Column(name="country", type="string", length=30, nullable=true, options={"fixed"=true})
     */
    private $country;

    /**
     * @var string|null
     *
     * @ORM\Column(name="tel", type="decimal", precision=10, scale=0, nullable=true)
     */
    private $tel;

    /**
     * @var string|null
     *
     * @ORM\Column(name="email", type="string", length=30, nullable=true, options={"fixed"=true})
     */
    private $email;


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
     * Set login.
     *
     * @param string $login
     *
     * @return Client
     */
    public function setLogin($login)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get login.
     *
     * @return string
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set password.
     *
     * @param string $password
     *
     * @return Client
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password.
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set civility.
     *
     * @param string|null $civility
     *
     * @return Client
     */
    public function setCivility($civility = null)
    {
        $this->civility = $civility;

        return $this;
    }

    /**
     * Get civility.
     *
     * @return string|null
     */
    public function getCivility()
    {
        return $this->civility;
    }

    /**
     * Set firstname.
     *
     * @param string|null $firstname
     *
     * @return Client
     */
    public function setFirstname($firstname = null)
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * Get firstname.
     *
     * @return string|null
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Set name.
     *
     * @param string|null $name
     *
     * @return Client
     */
    public function setName($name = null)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string|null
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set address.
     *
     * @param string|null $address
     *
     * @return Client
     */
    public function setAddress($address = null)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address.
     *
     * @return string|null
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set cp.
     *
     * @param string|null $cp
     *
     * @return Client
     */
    public function setCp($cp = null)
    {
        $this->cp = $cp;

        return $this;
    }

    /**
     * Get cp.
     *
     * @return string|null
     */
    public function getCp()
    {
        return $this->cp;
    }

    /**
     * Set city.
     *
     * @param string|null $city
     *
     * @return Client
     */
    public function setCity($city = null)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city.
     *
     * @return string|null
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set country.
     *
     * @param string|null $country
     *
     * @return Client
     */
    public function setCountry($country = null)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country.
     *
     * @return string|null
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Set tel.
     *
     * @param string|null $tel
     *
     * @return Client
     */
    public function setTel($tel = null)
    {
        $this->tel = $tel;

        return $this;
    }

    /**
     * Get tel.
     *
     * @return string|null
     */
    public function getTel()
    {
        return $this->tel;
    }

    /**
     * Set email.
     *
     * @param string|null $email
     *
     * @return Client
     */
    public function setEmail($email = null)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email.
     *
     * @return string|null
     */
    public function getEmail()
    {
        return $this->email;
    }


	/**
	 * Specify data which should be serialized to JSON
	 * Serializes the object to a value that can be serialized natively by json_encode().
	 * @return mixed Returns data which can be serialized by json_encode(), which is a value of any type other than a resource .
	 */
	public function jsonSerialize() {
		$vars = get_object_vars($this);
        unset($vars['password']);
        return $vars;
	}
}
