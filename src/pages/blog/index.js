import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import sampleImg from '../../../static/img/bg3.jpg'

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div
            className="full-width-image margin-top-0"
            style={{
                backgroundImage: `url(${sampleImg})`,
                backgroundPosition: `top`,
                backgroundAttachment: `fixed`,
                height: '200px'
            }}></div>
                <section >
                    <div className="row">
                        <div className="categoryBar">
                            <div className="cat_1">
                                <a href="">WEB</a>
                                <div className="cat_2">
                                    <a href="">- JavaScript</a><br/>
                                    <a href="">- NodeJS</a><br/>
                                    <a href="">- React</a><br/>
                                </div>
                            </div>
                            <div className="cat_1">
                                <a href="">MOBILE</a>
                                <div className="cat_2">
                                    <a href="">- Android</a><br/>
                                    <a href="">- React Native</a><br/>
                                </div>
                            </div>
                            <div className="cat_1">
                                <a href="">Git</a>
                            </div>
                            <div className="cat_1">
                                <a href="">DEEP LEARNING</a>
                                <div className="cat_2">
                                    <a href="">- Image</a><br/>
                                    <a href="">- NLP</a><br/>
                                </div>
                            </div>
                            <div className="cat_1">
                                <a href="">ALGORITHMS</a>
                                <div className="cat_2">
                                    <a href="">- DP</a><br/>
                                    <a href="">- Search</a><br/>
                                </div>
                            </div>
                        </div>
                        <div className="posts">
                            <BlogRoll/>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
