import React from 'react';


import Header from '../partials/Header';

function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow">

                <section className="bg-gradient-to-b from-gray-100 to-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                            {/* Page header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                                <h1 className="h1">Privacy Policy</h1>
                            </div>

                            {/* Form */}
                            <div className="w-full flex flex-col gap-3">
                              
                                <p>Last Updated: 17 Dec 2022</p>

                                <p>Thank you for using our  application ("LabelBaker"). This privacy policy ("Policy") explains how we collect, use, and share information about you when you use the Application.</p>

                                <p>By using the Application, you agree to the collection, use, and sharing of your information as described in this Policy. If you do not agree with our policies and practices, do not use the Application.</p>

                                <p>We may change our policies and practices from time to time. We encourage you to review the Policy whenever you access the Application to stay informed about our information practices and the choices available to you.</p>

                                <p>Information We Collect and How We Use It</p>

                                <p>We collect several types of information from and about users of the Application, including:</p>

                                <p>Personal information: We collect personal information from you when you provide it to us directly, such as when you create an account or save a label. This may include your name, email address, and other contact information.</p>

                                <p>Usage information: We collect information about your use of the Application, such as the labels you create and the features you use.</p>

                                <p>Device information: We collect information about the devices you use to access the Application, such as the device's unique identifier, IP address, and operating system.</p>

                                <p>We use the information we collect to operate and improve the Application, to provide you with the services and features offered through the Application, and to communicate with you about your use of the Application.</p>

                                <p>Sharing of Information</p>

                                    <p>We may share your information in the following ways:</p>

                                    <p>With service providers: We may share your information with third parties that perform services on our behalf, such as hosting and maintenance, analytics, and marketing. These service providers are required to protect your information and may not use it for any other purpose.</p>

                                    <p>With third parties for legal reasons: We may disclose your information if we believe in good faith that such disclosure is necessary to comply with the law, protect our rights or the rights of others, or prevent fraud or abuse.</p>

                                    <p>With third parties for business purposes: We may share your information with third parties for business purposes, such as in connection with a sale, merger, or acquisition of our company or assets.</p>

                                    <p>Your Choices and Access to Your Information</p>

                                    <p>You have the right to access, update, or delete your personal information at any time. You can do this by logging into your account and updating your profile or by contacting us at <b>hi@labelbaker.com</b>.</p>

                                    <p>You also have the right to opt out of certain uses of your information, such as marketing communications. You can do this by following the unsubscribe instructions in any such communication or by contacting us at <b>hi@labelbaker.com</b>.</p>

                                    <p>Security</p>

                                    <p>We take reasonable measures to protect your information from unauthorized access or disclosure. However, no system is completely secure, and we cannot guarantee the security of your information.</p>

                                    <p>Contact Us</p>

                                    <p>If you have any questions or concerns about our privacy practices, please contact us at <b>hi@labelbaker.com</b>.</p>
                            </div>

                        </div>
                    </div>
                </section>

            </main>



        </div>
    );
}

export default PrivacyPolicy;