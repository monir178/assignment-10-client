import React from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const Blog = () => {
    return (
        <div className="bg-gradient-to-b from-gray-100 to-white py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className=" rounded-lg shadow-lg p-8 bg-gradient-to-r from-gray-300 to-blue-200">
                    <h3 className="text-lg lg:text-2xl font-semibold text-sky-800 leading-relaxed mb-4">Question 1: What is CORS?</h3>
                    <p className="text-gray-800">
                        CORS (Cross-Origin Resource Sharing) is a mechanism that allows web browsers
                        to make cross-origin HTTP requests. It enables a web page to access resources
                        from a different domain than the one it originated from.
                    </p>
                </div>
                <div className="rounded-lg shadow-lg p-8 bg-gradient-to-r from-gray-300 to-blue-200">
                    <h3 className="text-lg lg:text-2xl font-semibold text-sky-800 leading-relaxed mb-4">Question 2: Why are you using Firebase? What other options do you have to implement authentication?</h3>
                    <p className="text-gray-800">
                        We are using Firebase for its easy setup and powerful features for authentication.
                        Other options for authentication include using traditional server-side frameworks
                        like Express.js with Passport.js or using identity providers like Auth0 or Okta.
                    </p>
                </div>
                <div className="rounded-lg shadow-lg p-8 bg-gradient-to-r from-gray-300 to-blue-200">
                    <h3 className="text-lg lg:text-2xl font-semibold text-sky-800 leading-relaxed mb-4">Question 3: How does the private route work?</h3>
                    <p className="text-gray-800">
                        A private route is a route that requires authentication to access. It checks
                        if the user is authenticated, and if not, redirects them to the login page.
                        If the user is authenticated, it allows access to the requested route.
                    </p>
                </div>
                <div className="rounded-lg shadow-lg p-8 bg-gradient-to-r from-gray-300 to-blue-200">
                    <h3 className="text-lg lg:text-2xl font-semibold text-sky-800 leading-relaxed mb-4">Question 4: What is Node? How does Node work?</h3>
                    <p className="text-gray-800">
                        Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
                        It allows you to run JavaScript code outside of a web browser, making it
                        suitable for server-side development. Node.js uses an event-driven, non-blocking
                        I/O model, which makes it efficient and scalable for handling concurrent requests.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
