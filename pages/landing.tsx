import React from 'react';
import ReactDom from 'react-dom';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import { useEffect } from 'react';
import Accordion from "../components/Accordion";


function landing() {
    useEffect(() => {

        var acc = document.getElementsByClassName('accordion');
        var i = 0;
        var len = acc.length;
        for (i = 0; i < len; i++) {
            acc[i].addEventListener('onClick', function () {
                this.classList.toggle('active');
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            })
        }

    }, [])
    return (
        <div className={styles.app}>
            <div className={styles.app__container}>
                <div className={styles.app__heading}>
                    <h1>xBlogger</h1>
                </div>
                <div className={styles.app__content}>
                    <div className={styles.left}>
                        <img src="https://cdn.mos.cms.futurecdn.net/WqzWxn2pBqvPN9n4DBrjr5.jpg" alt="#" />
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, debitis ipsa. Quae?</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio itaque quasi eveniet, sunt molestiae saepe! Doloremque, voluptates, eius ut veritatis odio provident nulla, fuga illum non rem modi doloribus autem?</p>
                    </div>
                    <div className={styles.right}>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatem pariatur nemo!
                        </h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio esse eius ipsam voluptatibus quod assumenda aliquid minima quaerat? Cupiditate repudiandae quibusdam quidem, temporibus quisquam sequi dolor repellat iste necessitatibus explicabo! Obcaecati nisi qui vitae eveniet.
                        </p>
                        <div className={styles.links}>
                        <div className={styles.app__link}>

                            <button id={styles.foot}><button className={styles.button_os}><a href="/login">LOG IN</a></button></button>
                        </div>
                        <div className={styles.app__link}>

                            <button id={styles.foot}><button className={styles.button_os}><a href="/signup">SIGN IN</a></button></button>
                        </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className={styles.app__faqs}>
                    <div className="___">
                        <h2>Frequently Asked Questions(FAQs)</h2>
                        <Accordion
                            title="What is Lorem?"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <Accordion
                            title="How do I change Lorem?"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <Accordion
                            title="Can I have fans?"
                            content="lorem ipsum dolor sit amet?"
                        />
                        <Accordion
                            title="Can I have fans?"
                            content="lorem ipsum dolor sit amet?"
                        />
                        <Accordion
                            title="Can I have fans?"
                            content="lorem ipsum dolor sit amet?"
                        />


                    </div>
                </div>
                <div className={styles.app__footer}>
                    <IconButton href="#"><InstagramIcon /></IconButton>
                    <IconButton href="#"><TwitterIcon /></IconButton>
                    <IconButton href="#"><FacebookIcon /></IconButton>
                </div>
            </div>
        </div>
    )
}

export default landing;