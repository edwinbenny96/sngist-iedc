import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 mt-5 bg-base-300">
            <aside>
                <Image src="/logo.svg" width={150} height={50} alt="logo" />
                <p className="font-bold pt-3">
                    SNGIST IEDC
                    <br />
                    Innovation and Entrepreneurship Development Centre
                </p>
                <p>Copyright © 2023 - All right reserved</p>
                <Link
                    href="mailto:sngtiedc@gmail.com"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    sngtiedc@gmail.com
                </Link>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 my-[-1rem]">
                    <Link href="https://www.instagram.com/iedc_sngist/" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="26"
                            width="26"
                            viewBox="0 0 448 512"
                            className="fill-current"
                        >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://www.youtube.com/@iedcsngist"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://www.facebook.com/iedcsngist?mibextid=ZbWKwL"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </Link>
                    <Link
                        href={"https://x.com/IedcSngist?s=20"}
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 512 512"
                            className="fill-current"
                        >
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                    </Link>
                    <Link
                        href={"https://x.com/IedcSngist?s=20"}
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                            viewBox="0 0 24 24"
                            height="26"
                            width="26"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6ZM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm5 5a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm.5-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 10c.34 0 .64.17.82.428A3.51 3.51 0 0 1 14.5 10c2.16 0 3.5 1.926 3.5 3.571V17a1 1 0 1 1-2 0V13.57c0-.768-.66-1.571-1.5-1.571-.524 0-1.103.285-1.5.963V17a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
