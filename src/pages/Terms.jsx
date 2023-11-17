import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Terms = () => {    
    return(
        <div className="w-full h-full flex flex-col items-center overflow-auto">
            <Navbar/>
            <div className="w-full lg:w-2/3 h-full flex flex-col pt-32 gap-3 p-6 privacy">
                <h1 className="text-2xl font-bold mx-auto">Terms Of Use</h1>
                <span>Please review these terms and conditions of use carefully before using our websites, including, without limitation, the following websites:</span>
                <span className="font-semibold">animekizi.org</span>
                <span>This document states the terms and conditions („Terms”) upon which animekizi.org („we” or „us”) will provide service to you on its websites, including, without limitation, the above listed websites (collectively, the „Website”). These Terms constitute a contractual agreement between you and us. By visiting, accessing, using, and/or joining (collectively „using”) the Website, you express your understanding and acceptance of these Terms. As used in this document, the terms „you” or „your” refers to you, any entity you represent, your or its representatives, successors, assigns and affiliates, and any of your or their devices. If you do not agree to be bound by these Terms, navigate away from the Website and cease using it.</span>
                <span className="font-semibold text-xl">1. Eligibility</span>
                <ul className="list-disc">
                    <li>You must be at least eighteen (18) years of age to use the Website, unless the age of majority in your jurisdiction is greater than eighteen (18) years of age, in which case you must be at least the age of majority in your jurisdiction. Use of the Website is not permitted where prohibited by law.</li>
                    <li>The consideration for your acceptance of these Terms is that we are providing you the Grant of Use to use the Website pursuant to Section 2 hereof. You acknowledge and agree that this consideration is adequate and that you have received the consideration.</li>
                </ul>
                <span className="font-semibold text-xl">2. Grant of Use</span>
                <ul className="list-disc">
                    <li>We grant you a non-exclusive, non-transferable and limited right to access, non-publicly display, and use the Website, including all content available therein (the „Content”) (subject to the restrictions of the Website) on your computer or mobile device consistent with these Terms. You may only access and use the Website for your personal and noncommercial use.</li>
                    <li>This grant is terminable by us at will for any reason and at our sole discretion, with or without prior notice. Upon termination, we may, but shall not be obligated to: (i) delete or deactivate your account, (ii) block your e-mail and/or IP addresses or otherwise terminate your use of and ability to use the Website, and/or (iii) remove and/or delete any of your User Submissions (defined below). You agree not to use or attempt to use the Website after said termination. Upon termination, the grant of your right to use the Website shall terminate, but all other portions of these Terms shall survive. You acknowledge that we are not responsible to you or any third party for the termination of your grant of use.</li>
                </ul>
                <span className="font-semibold text-xl">3. Intellectual Property</span>
                <ul className="list-disc">
                    <li>The Content on the Website, excluding User Submissions and Third Party Content (defined below), but including other text, graphical images, photographs, music, video, software, scripts and trademarks, service marks and logos contained therein (collectively „Proprietary Materials”), are owned by and/or licensed to us. All Proprietary Materials are subject to copyright, trademark and/or other rights under the laws of applicable jurisdictions, including domestic laws, foreign laws, and international conventions. We reserve all our rights over our Proprietary Materials.</li>
                    <li>Except as otherwise explicitly permitted, you agree not to copy, modify, publish, transmit, distribute, participate in the transfer or sale of, create derivative works of, or in any other way exploit, in whole or in part, any Content.</li>
                </ul>
                <span className="font-semibold text-xl">4. User Submissions</span>
                <ul className="list-disc">
                    <li>You are entirely responsible for any and all materials you upload, submit, transmit, create, modify or otherwise make available via the Website, including any sound files that you create, modify, transmit or download through the Website (collectively, „User Submissions”). User Submissions cannot always be withdrawn. You acknowledge that any disclosure of personal information in User Submissions may make you personally identifiable and that we do not guarantee any confidentiality with respect to User Submissions.</li>
                    <li>You shall be solely responsible for any and all of your own User Submissions and any and all consequences of uploading, submitting, modifying, transmitting, creating or otherwise making available the User Submissions. For any and all of your User Submissions, you affirm, represent and warrant that:
                        <ul style={{
                            listStyleType:"circle",
                            marginLeft:"20px"
                        }}>
                            <li>You own or have the necessary licenses, permissions, rights or consents to use and authorize us to use all trademarks, copyrights, trade secrets or other proprietary rights in and to User Submissions for any and all uses contemplated by the Website and these Terms;</li>
                            <li>You will not post, or allow anyone else to post, any material that depicts any sexually explicit acts; and</li>
                            <li>You have written consent, release, and/or permission from each and every identifiable individual in the User Submission to use the name and/or likeness of each and every such identifiable individual to enable use of the User Submission for any and all uses contemplated by the Websites and these Terms.</li>
                        </ul>
                    </li>
                    <li>You further agree that you shall not upload, submit, create, transmit, modify or otherwise make available material that:
                        <ul style={{
                            listStyleType:"circle",
                            marginLeft:"20px"
                        }}>
                            <li>Is copyrighted, protected by trade secret or trademark laws, or otherwise subject to third party proprietary rights, including privacy and publicity rights, unless you are the owner of such rights or have explicit permission from the rightful owner to submit the material and to grant us all of the license rights granted herein;</li>
                            <li>Is obscene, vulgar, illegal, unlawful, defamatory, fraudulent, libelous, harmful, harassing, abusive, threatening, invasive of privacy or publicity rights, hateful, racially or ethnically offensive, inflammatory, or otherwise inappropriate as decided by us in our sole discretion;</li>
                            <li>Depicts illegal activities, promotes or depicts physical harm or injury against any group or individual, or promotes or depicts any act of cruelty to animals;</li>
                            <li>Impersonates any person or entity or otherwise misrepresents you in any way, including creating a false identity;</li>
                            <li>Would constitute, encourage or provide instructions for a criminal offense, a violation of the rights of any party, or that would otherwise create liability or violate any local, state, national or international law; or</li>
                            <li>Is unsolicited or unauthorized advertising, promotion, „spam” or any other form of solicitation.</li>
                        </ul>
                    </li>
                    <li>We claim no ownership or control over User Submissions or Third Party Content. You or a third-party licensor, as appropriate, retain all copyrights to User Submissions and you are responsible for protecting those rights as appropriate. You irrevocably grant us a world-wide, non-exclusive, royalty-free, perpetual, non-cancelable, sub-licenseable license to reproduce, publicly perform, publicly display, distribute, adapt, modify, publish, translate, create derivative works of and otherwise exploit User Submissions for any purpose, including without limitation any purpose contemplated by the Website and these Terms. You also irrevocably waive and cause to be waived against us and any of our users any claims and assertions of moral rights or attribution with respect to User Submissions.</li>
                    <li>You represent and warrant that you have all the rights, power and authority necessary to grant the rights granted herein to User Submissions. Specifically, you represent and warrant that you own the title to the User Submissions, that you have the right to upload, modify, access, transmit, create or otherwise make available the User Submissions on the Website, and that uploading the User Submissions will not infringe upon any other party's rights or your contractual obligations to other parties.</li>
                    <li>You acknowledge that we may at our sole discretion refuse to publish, remove, or block access to any User Submission for any reason, or for no reason at all, with or without notice.</li>
                    <li>Without limiting the other indemnification provisions herein, you agree to defend us against any claim, demand, suit or proceeding made or brought against us by a third-party alleging that your User Submissions or your use of the Website in violation of these Terms infringes or misappropriates the intellectual property rights of any third-party or violates applicable law and you shall indemnify us for any and all damages against us and for reasonable attorney's fees and other costs incurred by us in connection with any such claim, demand, suit or proceeding.</li>
                </ul>
                <span className="font-semibold text-xl">5. Content on the Website</span>
                <ul className="list-disc">
                    <li>You understand and acknowledge that, when using the Website, you will be exposed to content from a variety of sources including content made available on the Website by other users, services, parties and through automated or other means (collectively, „Third Party Content”) and that we do not control and are not responsible for any Third Party Content. You understand and acknowledge that you may be exposed to content that is inaccurate, offensive, indecent or otherwise objectionable or may cause harm to your computer systems and, without limiting the other limitation of liability provisions herein, you agree to waive, and hereby do waive, any legal or equitable rights or remedies you may have against us with respect thereto.</li>
                    <li>We claim no ownership or control over Third Party Content. Third parties retain all rights to Third Party Content and they are responsible for protecting their rights as appropriate.</li>
                    <li>You understand and acknowledge that we assume no responsibility whatsoever for monitoring the Website for inappropriate content or conduct. If at any time we choose, in our sole discretion, to monitor such content, we assume no responsibility for such content, have no obligation to modify or remove any such content (including User Submissions and Third Party Content), and assume no responsibility for the conduct of others submitting any such content (including User Submissions and Third Party Content).</li>
                    <li>Without limiting the provisions below on limitations of liability and disclaimers of warranties, all Content (including User Submissions and Third Party Content) on the Website is provided to you „AS-IS” for your information and personal use only and you shall not use, copy, reproduce, distribute, transmit, broadcast, display, sell, license or otherwise exploit for any other purpose whatsoever the Content without the prior written consent of the respective owners/licensors of the Content.</li>
                    <li>You acknowledge that we may at our sole discretion refuse to publish, remove, or block access to any Content for any reason, or for no reason at all, with or without notice.</li>
                </ul>
                <span className="font-semibold text-xl">6. User Conduct</span>
                <ul className="list-disc">
                    <li>You represent and warrant that all the information and content provided by you to us is accurate and current and that you have all necessary rights, power and authority to (i) agree to these Terms, (ii) provide the User Submissions to us, and (iii) perform the acts required of you under these Terms.</li>
                    <li>You hereby expressly authorize us to monitor, record and log any of your activities on the Website.</li>
                    <li>As a condition of your use of the Website:
                        <ul style={{
                            listStyleType:"circle",
                            marginLeft:"20px"
                        }}>
                            <li>You agree not to use the Website for any unlawful purpose or in any way that is prohibited by these Terms;</li>
                            <li>You agree to abide by all applicable local, state, national and international laws and regulations;</li>
                            <li>You agree not to use the Website in any way that exposes us to criminal or civil liability;</li>
                            <li>You agree that you are solely responsible for all acts and omissions that occur as a result of your use of the Website;</li>
                            <li>You agree that all your User Submissions belong to you and that you have the right and authority to provide them to us and make use of them on or through the Website;</li>
                            <li>You agree not to use any automated means, including robots, crawlers or data mining tools, to download, monitor or use data or Content from the Website;</li>
                            <li>You agree not to take any action that imposes, or may impose, in our sole discretion, an unreasonable or disproportionately large load on our technology infrastructure or otherwise make excessive demands on it;</li>
                            <li>You agree not to „stalk” or otherwise harass anyone on or through the Website;</li>
                            <li>You agree not to forge headers or otherwise manipulate identifiers in order to disguise the origin of any information you transmit;</li>
                            <li>You agree not to disable, circumvent, or otherwise interfere with security related features of the Website or features that prevent or restrict use or copying of any content or which enforce limitations on the use of the Website or the content therein;</li>
                            <li>You agree not to post, link to, or otherwise make available on the Website any material that contains software viruses or any computer code, file or program designed to interrupt, destroy, limit or monitor the functionality of any computer software or hardware or any telecommunications equipment;</li>
                            <li>You agree not to license, sublicense, sell, resell, transfer, assign, distribute or otherwise in any way commercially exploit or make available the Website or any Content to any third party;</li>
                            <li>You agree not to „frame” or „mirror” the Website; and</li>
                            <li>You agree not to reverse engineer any portion of the Website.</li>
                        </ul>
                    </li>
                    <li>We reserve the right to take appropriate action against any user for any unauthorized use of the Website, including civil, criminal and injunctive redress and the termination of any user's use of the Website. Any use of the Website and our computer systems not authorized by these Terms is a violation of these Terms and certain international, foreign and domestic criminal and civil laws.</li>
                    <li>In addition to termination of the grant of use of the Website, any violation of this Agreement, including the provisions of this Section 6, shall subject you to liquidated damages of ten thousand dollars ($10,000) for each violation. In the event that your violation results in legal action (whether against you or against us by any party) or physical or emotional harm to any party, you shall be subject to liquidated damages of One Hundred and Fifty Thousand Dollars ($150,000) for each violation. We may, in our discretion, assign any such damage claim or portion thereof to a third party that has been wronged by your conduct. These liquidated damages provisions are not a penalty, but instead an attempt by the Parties to reasonably ascertain the amount of actual damage that could occur from such a violation. You acknowledge and agree that the amount of these liquidated damages is a minimum and that if actual damages are greater you shall be liable for the greater amount. If a court of competent jurisdiction finds that these liquidated damages are unenforceable to any extent, then the liquidated damages shall be lowered only by the extent necessary for them to be enforceable.</li>
                </ul>
                <span className="font-semibold text-xl">7. Services on the Website</span>
                <ul className="list-disc">
                    <li>You acknowledge that the Website is a general-purpose search engine and tool. Specifically, but without limitation, the Website allows you to search multiple websites for music. Moreover, the Website is a general-purpose tool that allows you to download audio files from videos and audio from elsewhere on the Internet. The Website may only be used in accordance with law. We do not encourage, condone, induce or allow any use of the Website that may be in violation of any law.</li>
                    <li>We do not store any User Submissions for anything longer than a transitory period of time to give users chance to download their content.</li>
                </ul>
                <span className="font-semibold text-xl">8. Fees</span>
                <ul className="list-disc">
                    <li>You acknowledge that we reserve the right to charge for any or all of our services and to change our fees from time to time in our sole discretion. If at any time we terminate your rights to use the Website because of a breach of these Terms, you shall not be entitled to a refund of any portion of your fees. In all other respects, such fees shall be governed by additional rules, terms, conditions or agreements posted on the Website and/or imposed by any sales agent or payment processing company, as may be amended from time to time.</li>
                </ul>
                <span className="font-semibold text-xl">9. Privacy Policy</span>
                <ul className="list-disc">
                    <li>We retain a separate Privacy Policy and your assent to these Terms also signifies your assent to the Privacy Policy. We reserve the right to amend the Privacy Policy at any time by posting such amendments to the Website. No other notification may be made to you about any amendments. Your continued use of the Website following such amendments will constitute your acceptance of such amendments, regardless of whether you have actually read them.</li>
                </ul>
                <span className="font-semibold text-xl">10. Copyright Claims</span>
                <ul className="list-disc">
                    <li>We respect the intellectual property rights of others. You may not infringe the copyright, trademark or other proprietary informational rights of any party. We may in our sole discretion remove any Content we have reason to believe violates any of the intellectual property rights of others and may terminate your use of the Website if you submit any such Content.</li>
                    <li>REPEAT INFRINGER POLICY. AS PART OF OUR REPEAT-INFRINGEMENT POLICY, ANY USER FOR WHOSE MATERIAL WE RECEIVE THREE GOOD-FAITH AND EFFECTIVE COMPLAINTS WITHIN ANY CONTIGUOUS SIX-MONTH PERIOD WILL HAVE HIS GRANT OF USE OF THE WEBSITE TERMINATED.</li>
                    <li>Although we are not subject to United States law, we voluntarily comply with the Digital Millennium Copyright Act. Pursuant to Title 17, Section 512(c)(2) of the United States Code, if you believe that any of your copyrighted material is being infringed on the Website, we have designated an agent to receive notifications of claimed copyright infringement. Notifications should be e-mailed to contact@animekizi.org.</li>
                    <li>All notifications not relevant to us or ineffective under the law will receive no response or action thereupon. An effective notification of claimed infringement must be a written communication to our agent that includes substantially the following:
                        <ul style={{
                            listStyleType:"circle",
                            marginLeft:"20px"
                        }}>
                            <li>Identification of the copyrighted work that is believed to be infringed. Please describe the work and, where possible, include a copy or the location (e.g., a URL) of an authorized version of the work;</li>
                            <li>Identification of the material that is believed to be infringing and its location or, for search results, identification of the reference or link to material or activity claimed to be infringing. Please describe the material and provide a URL or any other pertinent information that will allow us to locate the material on the Website or on the Internet;</li>
                            <li>Information that will allow us to contact you, including your address, telephone number and, if available, your e-mail address;</li>
                            <li>A statement that you have a good faith belief that the use of the material complained of is not authorized by you, your agent or the law;</li>
                            <li>A statement that the information in the notification is accurate and that under penalty of perjury that you are the owner or are authorized to act on behalf of the owner of the work that is allegedly infringed; and</li>
                            <li>A physical or electronic signature from the copyright holder or an authorized representative.</li>
                        </ul>
                    </li>
                </ul>
                <Footer/>
            </div>
        </div>
    )
};

export default Terms;
