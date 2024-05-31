import React from 'react'
import { Link } from 'react-router-dom'

import Adams from '../assets/adams.jpg'
import Asimov from '../assets/asimov.jpg'
import Dick from '../assets/dick.jpg'
import LeGuin from '../assets/leguin.jpg'
import Pratchett from '../assets/pratchett.jpg'
import Tolkien from '../assets/tolkien.jpg'

const Home = () => {
    return (
        <div>
            {/* <div className="container">
                <div className="row">
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={Asimov} alt="author" />
                                <span className="card-title">Isaac Asimov</span>
                            </div>
                            <div className="card-content">
                                <p>Isaac Asimov Content</p>
                            </div>
                            <div className="card-action">
                            <Link to="/asimov">Read about Isaac Asimov</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={Adams} alt="author" />
                                <span className="card-title">Douglas Adams</span>
                            </div>
                            <div className="card-content">
                                <p>Douglas Adams Content</p>
                            </div>
                            <div className="card-action">
                            <Link to="/adams">Read about Douglas Adams</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={Dick} alt="author" />
                                <span className="card-title">Philip K. Dick</span>
                            </div>
                            <div className="card-content">
                                <p>Philip K. Dick Content</p>
                            </div>
                            <div className="card-action">
                            <Link to="/dick">Read about Philip K. Dick</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={LeGuin} alt="author" />
                                <span className="card-title">Ursula K. Le Guin</span>
                            </div>
                            <div className="card-content">
                                <p>Ursula K. Le Guin Content</p>
                            </div>
                            <div className="card-action">
                            <Link to="/leguin">Read about Ursula K. Le Guin</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={Pratchett} alt="author" />
                                <span className="card-title">Sir Terry Pratchett</span>
                            </div>
                            <div className="card-content">
                                <p>Sir Terry Pratchett Content</p>
                            </div>
                            <div className="card-action">
                            <Link to="/pratchett">Read about Sir Terry Pratchett</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={Tolkien} alt="author" />
                                <span className="card-title">J.R.R. Tolkien</span>
                            </div>
                            <div className="card-content">
                                <p>J.R.R. Tolkien Content</p>
                            </div>
                            <div className="card-action">
                            <Link to="/tolkien">Read about J.R.R. Tolkien</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="container">
                <div className="row">
                    <div className="col s4">
                        <div className="card indigo lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">Isaac Asimov</span>
                            </div>
                            <div className="card-action">
                                <p><Link to="/asimov">Read about Isaac Asimov</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card indigo lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">Philip K. Dick</span>
                            </div>
                            <div className="card-action">
                                <p><Link to="/dick">Read about Philip K. Dick</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card indigo lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">J.R.R. Tolkien</span>
                            </div>
                            <div className="card-action">
                                <p><Link to="/tolkien">Read about J.R.R. Tolkien</Link></p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="row">
                    <div className="col s4">
                        <div className="card indigo lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">Douglas Adams</span>
                            </div>
                            <div className="card-action">
                                <p><Link to="/adams">Read about Douglas Adams</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card indigo lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">Sir Terry Pratchett</span>
                            </div>
                            <div className="card-action">
                                <p><Link to="/pratchett">Read about Sir Terry Pratchett</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card indigo lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">Ursula K. Le Guin</span>
                            </div>
                            <div className="card-action">
                                <p><Link to="/leguin">Read about Ursula K. Le Guin</Link></p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Home