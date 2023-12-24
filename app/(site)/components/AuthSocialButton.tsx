
import {IconType} from 'react-icons';

interface AuthSocialButtonProps{
    icon: IconType,
    onClick:() => void;
}
const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onClick
}) => {
  return (
    <button
        type="button"
        onClick = {onClick}
        className="
            inline-flex
            w-full
            justify-start
            rounded-md
            bg-white
            px-4
            py-2
            mb-4
            text-gray-500
            shadow-sm
            ring-1
            ring-inset
            ring-gray-300
            hover:bg-gray-50
            focus:outline-offset-0
        "
    >
        <Icon  
            className="
                mt-1
                text-3xl
                me-6
            " 
        />
        <span
            className="
                mt-1
                w-full
                text-lg
                text-center
            "
        >
            Sign in with Google
        </span>

    </button>
  )
};

export default AuthSocialButton;
