import React from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const Faq = () => {
    return (
        <div className="bg-base-200 py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="zoom-in">
                <div className=" rounded-lg shadow-lg p-8 bg-gradient-to-r from-gray-300 to-blue-200">
                    <h3 className="text-lg lg:text-2xl font-semibold text-sky-800 leading-relaxed mb-4">Question 1: What programming languages do you offer courses for?</h3>
                    <p className="text-gray-800">
                        We offer courses for a wide range of programming languages, including Python, JavaScript, Java, C++, and more.
                    </p>
                </div>
                <div className="rounded-lg shadow-lg p-8 bg-gradient-to-r from-gray-300 to-blue-200">
                    <h3 className="text-lg lg:text-2xl font-semibold text-sky-800 leading-relaxed mb-4">Question 2: Are the courses suitable for beginners with no prior programming experience?</h3>
                    <p className="text-gray-800">
                        Yes, absolutely! We have courses specifically designed for beginners, providing step-by-step guidance and a solid foundation in programming concepts.
                    </p>
                </div>
                <div className="rounded-lg shadow-lg p-8 bg-gradient-to-r from-gray-300 to-blue-200">
                    <h3 className="text-lg lg:text-2xl font-semibold text-sky-800 leading-relaxed mb-4">Question 3: How long does it take to complete a course?</h3>
                    <p className="text-gray-800">
                        The course duration varies depending on the specific course and the learner's pace. We offer both short, intensive courses that can be completed in a few weeks, as well as longer, comprehensive programs that span several months. The estimated duration is mentioned on each course's page.
                    </p>
                </div>
                <div className="rounded-lg shadow-lg p-8 bg-gradient-to-r from-gray-300 to-blue-200">
                    <h3 className="text-lg lg:text-2xl font-semibold text-sky-800 leading-relaxed mb-4">Question 4: Can I access the course materials after completing a course?</h3>
                    <p className="text-gray-800">
                        Yes, you will have lifetime access to the course materials once you enroll in a course. This allows you to review the content, refer back to examples, and keep learning at your own convenience.
                    </p>
                </div>
                <div className="rounded-lg shadow-lg p-8 bg-gradient-to-r from-gray-300 to-blue-200">
                    <h3 className="text-lg lg:text-2xl font-semibold text-sky-800 leading-relaxed mb-4">Question 5: Are there any prerequisites for enrolling in a course?</h3>
                    <p className="text-gray-800">
                        Most of our courses do not have strict prerequisites. However, some advanced courses may recommend prior knowledge in specific programming languages or concepts. We always provide detailed information about prerequisites, if any, on the course page.
                    </p>
                </div>
                <div className="rounded-lg shadow-lg p-8 bg-gradient-to-r from-gray-300 to-blue-200">
                    <h3 className="text-lg lg:text-2xl font-semibold text-sky-800 leading-relaxed mb-4">Question 6: Can I interact with the instructors or ask questions during the course?</h3>
                    <p className="text-gray-800">
                        Absolutely! We encourage active participation and provide various avenues for interaction. You can ask questions in the course discussion forums, participate in live Q&A sessions with instructors, and even reach out via email for personalized support.
                    </p>
                </div>
                <div className="rounded-lg shadow-lg p-8 bg-gradient-to-r from-gray-300 to-blue-200">
                    <h3 className="text-lg lg:text-2xl font-semibold text-sky-800 leading-relaxed mb-4">Question 7: Will I receive a certificate upon completing a course?</h3>
                    <p className="text-gray-800">
                        Yes, upon successful completion of a course, you will receive a certificate of completion. Our certificates are a testament to your newly acquired skills and can be a valuable addition to your professional portfolio.
                    </p>
                </div>
                <div className="rounded-lg shadow-lg p-8 bg-gradient-to-r from-gray-300 to-blue-200">
                    <h3 className="text-lg lg:text-2xl font-semibold text-sky-800 leading-relaxed mb-4">Question 8: Are the courses self-paced or scheduled at specific times?</h3>
                    <p className="text-gray-800">
                        The majority of our courses are self-paced, allowing you to learn at your own speed and according to your schedule. However, we also offer some instructor-led courses that follow a structured schedule and include live sessions. The course format is mentioned on each course's page.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;
