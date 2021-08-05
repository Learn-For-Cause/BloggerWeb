import React, { useEffect, useState } from 'react'

import BlogList from "../components/BlogList";
import { Button, Container, Grid } from "@material-ui/core";
import styles from '../styles/publication.module.css';
import Blogs from "../components/Blogs";
import Link from 'next/link';
import PostBody from './posts/[id]';
import Navigation from "../components/Navigation";

export default function publications() {
    const img1 = "data:image/jpeg;base64,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";
    const [value, setValues] = useState({name: "", title: "",description:"", paragraph: "", url: "" });
    const [posts, setPosts] = useState([{ id: 1, data: { name:"Rohan Patidar", title: "LETS TALK ABOUT THIS NEW GENERATION",description:"qxwd  qxwduq qw dx qwx dq", paragraph: "THiS iS my FIRst pAraGRAPh", image: img1 } },
    { id: 2, data: {name:"Rohan Patidar", title: "HEllo WoRLD",description:"qxwd  qxwduq qw dx qwx werwrovvwdq", paragraph: "THiS iS my FIRst pAraGRAPh sdjfwefuwif ihdfw f wifwfwfjwfjwifwfnwcnfwewfbwcdui ufcewffwf cf wfw wf wuwhfefrewfww  hrfwfhwfhhfshfhfhhfgehg8  e8rgegyeryge gergyeg regerger g ege e ehgeh ehf fgh gfhhshvhfhf sdvsdherusdnvusfrvnsvnee e egeruevfve rgvnf", image: img1 } },
    { id: 3, data: {name:"Rohan Patidar", title: "HEllo WoRLD",description:"qxwd  qxwduq qw dx qwx dq djsqwd", paragraph: "THiS iS my FIRst pAraGRAPh wfwfew", image: img1 } },
    { id: 4, data: {name:"Rohan Patidar", title: "HEllo WoRLD",description:"qxwd  qxwduq qw dx qwx dq dqcqd", paragraph: "THiS iS my FIRst pAraGRAPh fjdnwfewfgr", image: img1 } },
    { id: 5, data: {name:"Rohan Patidar", title: "HEllo WoRLD",description:"qxwd  qxwduq qw dx qwx dqciqrryw90bfrw", paragraph: "THiS iS my FIRst pAraGRAPh dsnisvir", image: img1 } }]);
    const topics = ["Art","Book","Fiction","Gaming","Comics","Film"];
    const changeValue = (e) => {
        setValues({ ...value, [e.target.name]: e.target.value });
    };
    const submit = (e) => {
        e.preventDefault();
        setPosts([...posts, { id: 6, data: {name:value.name, title: value.title,description:value.description, paragraph: value.paragraph, image: value.url } }])
        setValues({ ...value, name: "", title: "",description: "", paragraph: "", url: "" });
    };
    return (
        <>
                <Navigation />
                <div className={styles.publication_app}>
                
                <div className={styles.App_posts}>
                    <Container>
                        {posts.map(({ id, data }) => (
                            <Blogs key={id} id={id} data={data} />
                        ))}
                    </Container>
                </div>

                <div className={styles.topics_container}>
                    <h3>SELECT TOPIC OF YOUR INTEREST</h3>
                    <div className={styles.topics_list}>
                        {topics.map((name)=>(
                            <Link href="#">
                                <a style={{textDecoration:"none",color:"grey"}}>
                            <div className={styles.topic_name}>
                            
                            <span>{name}</span>
                            </div></a>
                            </Link>

                        ))}
                    </div>
                </div>
                </div>
                <form onSubmit={submit}>
                    <div className={styles.form_container}>
                        <h1>Create your Post</h1>
                        <div className={styles.Form_InputDivs}>
                            <p>Name</p>
                            <input
                                value={value.name}
                                name="name"
                                type="text"
                                placeholder="Name..."
                                onChange={changeValue}
                            />
                        </div>
                        <div className={styles.Form_InputDivs}>
                            <p>Title</p>
                            <input
                                value={value.title}
                                name="title"
                                type="text"
                                placeholder="Title..."
                                onChange={changeValue}
                            />
                        </div>
                        <div className={styles.Form_InputDivs}>
                            <p>Description</p>
                            <input
                                value={value.description}
                                name="description"
                                type="text"
                                placeholder="Description..."
                                onChange={changeValue}
                            />
                        </div>
                        <div className={styles.Form_InputDivs}>
                            <p>Paragraph</p>
                            <input
                                value={value.paragraph}
                                type="text"
                                placeholder="Paragraph..."
                                name="paragraph"
                                onChange={changeValue}
                            />
                        </div>
                        <div className={styles.Form_InputDivs}>
                            <p>Image URL</p>
                            <input
                                value={value.url}
                                type="text"
                                placeholder="Image URL"
                                name="url"
                                onChange={changeValue}
                            />
                        </div>

                        <div className={styles.Form_SubmitBtn}>
                            <Button type="submit">Submit</Button>
                        </div>
                    </div>
                </form>


        </>
    )
}
