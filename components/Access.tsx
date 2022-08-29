import React from "react";
import { Terminal } from "./Terminal";
import styles from "../styles/Access.module.scss";

export const Access = () => (
    <div className={`${styles.container} h-72 w-96`}>
        <Terminal>
            <div className={`${styles.content} p-4`}>
                <iframe
                    title="map-to-INIAD"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.7997895677895!2d139.71335761508664!3d35.78029408017133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018931934050759%3A0x239ff01917c6ae5a!2z5p2x5rSL5aSn5a2mIOaDheWgsemAo-aQuuWtpumDqCAoSU5JQUQp!5e0!3m2!1sja!2sjp!4v1661748807072!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    // style="border:0;"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </Terminal>
    </div>
);
