import React from 'react';
import { Accordion } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="container">
            <h2 >What we do?</h2>

            {/* Here is details what we do in our services */}
            <Accordion defaultActiveKey="0" flush >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Prepare a student for IELTS Like a Pro</Accordion.Header>
                    <Accordion.Body>
                        If you are on this page, you may dream of living or studying in a foreign country, but have one large obstacle blocking your way:  the IELTS exam.

                        At the moment, you may find the IELTS difficut, but once you discover how the classes at IELTS PRO can help you improve your band score, you will gain the confidence and skill you need to achieve your goals.

                        <div>
                            <h2>* Important *</h2>
                            <h3>IELTS PRO is the perfect solution for people who:</h3>



                            <h4>-need to get last minute preparation before their IELTS exam</h4>

                            <h4>-want to test their level - their current band score</h4>

                            <h4>-already took the exam but want to improve their band scores</h4>

                            <h4>-did not get enough personal attention in their last IELTS course</h4>

                            <h4>-want to get practice under exam conditions</h4>

                            <h4>-want to know exactly how to prepare for the exam</h4>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Help Student for get their visa asap after their IELTS Exam</Accordion.Header>
                    <Accordion.Body>
                        1. Where do I start?<br />
                        2. Where do I apply for my student visa?<br />
                        3. What type of student visa do I need?<br />
                        4. How much money will I need?<br />
                        5. How good must my English be?<br />
                        6. Can my family travel with me?<br />
                        7. Can I work on my visa?<br />
                        8. How long can I stay?<br />
                        9. Are Governments trying to make it harder for international students?<br />
                        10. Where can I find more information?<br />


                        <br />
                        Different countries have differing visa systems and acceptance procedures. However, they are usually very similar:
                        <br />
                        To study in the UK you need to have received an offer for a place on a course. You need to prove that you can understand English, including reading, writing and speaking. Find out more about UK Student Visas.
                        <br />
                        To study in the US you need to prove that you have a permanent residence in your country of citizenship. You need to have the funds to support your study and intend to return home once your study is complete. Find out more about US Student Visas.
                        <br />
                        To study in Australia you also need to prove that you have sufficient funds to support your course fees and living costs. You will also be assessed based on the subject you have chosen and your country of citizenship.
                        <br />
                        To study in Europe you do not require a visa if your country of citizenship is an EU member. If you are outside of the EU you should check your chosen destination’s visa requirements for more specific details.
                        <br />
                        Wherever you chose to study we advise that you apply for your visa as soon as possible.
                        <br />
                        What type of student visa do I need?
                        <br />
                        If you are studying abroad for your post-16 education you will require a general student visa.<br />
                        In the UK this is called a Tier 4 (General Student) visa.<br />
                        In the US this is called a F-1 visa.<br />
                        In Australia your visa type will depend on your country of citizenship and your chosen subject.



                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>We train for different country and also for those countries IELTS score requirements</Accordion.Header>
                    <Accordion.Body>
                        <p>For any bachelors coursework or for a diploma program, a student needs to have at least a minimum of 5.5 bands in individual modules of the IELTS with the overall band scale not less than a 6.0 pointer.</p>
                        <p>On the other hand, for a masters program, a candidate needs to achieve an overall band score of 6.5 [minimum] with no individual band less than a 6.0 pointer.</p>
                        <p>Also, even though most of the doctoral/ post-doctoral course band requirements fall in the same category as those of the masters program, there might be universities which will ask the student to achieve at least a 7.0 band with no individual band less than a 6.5 band, for admissions into a research program.

                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Email us for any queries</Accordion.Header>
                    <Accordion.Body>
                        mail@ proielts21guide@gmail.com
                        <br />
                        Phone: +880169341967
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default AboutUs;