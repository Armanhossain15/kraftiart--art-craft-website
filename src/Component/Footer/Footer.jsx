
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" pt-10 pb-8 bg-black">
            <footer className="footer p-10  text-white max-w-[1322px] mx-auto">
                <nav>
                    <h6 className="text-xl uppercase font-bold">Services</h6>
                    <a className="text-base">Branding</a>
                    <a className="text-base">Design</a>
                    <a className="text-base">Marketing</a>
                    <a className="text-base">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-xl uppercase font-bold">Company</h6>
                    <a className="text-base">About us</a>
                    <a className="text-base">Contact</a>
                    <a className="text-base">Jobs</a>
                    <a className="text-base">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-xl uppercase font-bold">Legal</h6>
                    <a className="text-base">Terms of use</a>
                    <a className="text-base">Privacy policy</a>
                    <a className="text-base">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="text-4xl uppercase font-extrabold">Krafti<span className="text-[#b18b5e] ">Art</span></h6>
                    <p className="my-2">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nemo iusto, distinctio </p>
                    <div className="mt-3">
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaFacebookF className="text-lg text-white" />
                        </button>
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaInstagram className="text-lg text-white" />
                        </button>
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaYoutube className="text-lg text-white" />
                        </button>
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaTwitter className="text-lg text-white" />
                        </button>
                    </div>
                </form>
            </footer>
        </div>
    );
};

export default Footer;