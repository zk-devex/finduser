import CreateUser from "@/components/CreateUser";
import UserInputForm from '@/components/UserInputForm'
function User() {
    return (
      <div className="container m-auto">
        <CreateUser />

      <div className="bg-green-200 items-center justify-center  w-80% h-svh mt-10 p-4">
      <UserInputForm />
      </div>

      </div>
    )
  }
  
  

export default User;