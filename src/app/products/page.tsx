import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
    return (
        <div className="p-5 border border-red-500 rounded-xl">
            <h1 className="text-red-500">Product Page</h1>
            <Button>VM 7.0</Button>
            <Input placeholder="Bora fechar esse projeto!" />
        </div>
    );
}
 
export default ProductPage;