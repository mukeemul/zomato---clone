import React from 'react';
import '../CSS File/App.css';
import { BiChevronRight, BiChevronDown } from 'react-icons/bi';

const FaqSection = () => {
    return (
        <>
            <div>
                <div className="collection">
                    <div className="faq-heading">Popular localities in and around Delhi NCR</div>
                </div>
                <div className="extra-div">
                    <div className="faq-box">
                        <div className="faq-section">
                            <div className="section-heading">Connaught Place</div>
                            <div className="section-places">250 places <BiChevronRight className='section-caret' /></div>
                        </div>
                        <div className="faq-section">
                            <div className="section-heading">Sector 29</div>
                            <div className="section-places">143 places <BiChevronRight className='section-caret' /></div>
                        </div>
                        <div className="faq-section">
                            <div className="section-heading">Sector 18, Noida</div>
                            <div className="section-places">204 places <BiChevronRight className='section-caret' /></div>
                        </div>
                        <div className="faq-section">
                            <div className="section-heading">Rajouri Garden</div>
                            <div className="section-places">293 places <BiChevronRight className='section-caret' /></div>
                        </div>
                        <div className="faq-section">
                            <div className="section-heading">Saket</div>
                            <div className="section-places">305 places <BiChevronRight className='section-caret' /></div>
                        </div>
                        <div className="faq-section">
                            <div className="section-heading">DLF Cyber City</div>
                            <div className="section-places">149 places <BiChevronRight className='section-caret' /></div>
                        </div>
                        <div className="faq-section">
                            <div className="section-heading">Golf Course Road</div>
                            <div className="section-places">154 places <BiChevronRight className='section-caret' /></div>
                        </div>
                        <div className="faq-section">
                            <div className="section-heading">DLF Phase 4</div>
                            <div className="section-places">222 places <BiChevronRight className='section-caret' /></div>
                        </div>
                        <div className="faq-section">
                            <div className="section-heading1">see more</div>
                            <BiChevronDown className='section-caret1' />
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <h2 class="title">Explore options near me</h2>
                <div class="faq">
                    <div class="question">
                        <h3>Popular cuisines near me</h3> <BiChevronDown />
                    </div>
                    <div class="answer">
                        <p>React.js is built using JSX – A combination of JavaScript and XML. Elements are created using JSX, then use JavaScript to render them on your site. While React has a steep learning curve for a junior developer, it’s quickly shaping into one of the most popular and in-demand JavaScript libraries.</p>
                    </div>
                </div>
                <div class="faq">
                    <div class="question">
                        <h3>Popular restaurant types near me</h3> <BiChevronDown />
                    </div>
                    <div class="answer">
                        <p>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)</p>
                    </div>
                </div>
                <div class="faq">
                    <div class="question">
                        <h3>Top Restaurant Chains</h3> <BiChevronDown />
                    </div>
                    <div class="answer">
                        <p>CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.</p>
                    </div>
                </div>
                <div class="faq">
                    <div class="question">
                        <h3>Cities We Deliver To</h3> <BiChevronDown />
                    </div>
                    <div class="answer">
                        <p>HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.</p>
                    </div>
                </div>
            </main>
        </>
    );
}

const shaan = document.querySelectorAll('.faq');
shaan.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

export default FaqSection;

