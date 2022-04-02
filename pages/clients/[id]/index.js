import { useRouter } from "next/router";

const ClinetProjectsPage = () => {
    const router = useRouter();
    function LoadProjectHandler (){
        //Load Data
        router.push('./clients/max/projecta');
    }
    return ( 
        <div>
            <h1>The project of given clinet</h1>
            <button onClick={LoadProjectHandler}>Load Project A</button>
        </div>
     );
}
 
export default ClinetProjectsPage;