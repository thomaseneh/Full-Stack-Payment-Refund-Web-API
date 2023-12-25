import { CiCircleCheck } from "react-icons/ci";

export default function(){
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    return(
        <div>
      <CiCircleCheck />
      <p>SUCCESS</p>
    </div>
    {registrationSuccess && <p>Congratulations, your account has been successfully created.</p>}
    
    )}
    <button href="/login" type="submit">
      Continue
    </button>
)
    }