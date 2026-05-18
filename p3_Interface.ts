
interface UserDetails {
    name:string;
    age?:number;
    readonly role :string;

}

function getUserDetails(user: UserDetails): void {
    console.log(`Name: ${user.name}`);
}

getUserDetails({name: "John", role: "Admin"});

interface defines contract / shape  for object. 
specically what paremeters & method must exists. 
 