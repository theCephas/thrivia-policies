import { Link } from "react-router-dom";
import "../App.css";
import Thrivia from "../assets/thrivia.png";

export default function Home() {
  const boldedWasteNG = () => (
    <span style={{ fontWeight: "bolder", fontSize: "1.15rem" }}>THRIVIA</span>
  );

  return (
    <div className="privacyPolicyContent">
      <img src={Thrivia} alt="" />
      <p
        style={{
          fontWeight: "bolder",
          fontSize: "1.15rem",
          color: "#001d7e",
        }}
      >
        This terms and conditions was last updated on 15 September, 2023
      </p>
      <p>
        These General Terms and Conditions set out the terms and conditions
        applying to and governing the usage of the WasteNG app - technology
        which connects Waste generators with Waste collector to help them
        dispose of their waste more efficiently, smartly and on-demand.
      </p>
      <p style={{ marginTop: "1rem" }}>
        The term “us” or “we” refers to WasteNG Operations. WasteNG is a private
        limited company incorporated and registered under the laws of federal
        republic of Nigeria with registration No. 6993671, registered office 40b
        isale Eko Avenue dolphin Estate ikoyi Lagos, or other WasteNG group
        company or co-operation partner where WasteNG Services are not provided
        by WasteNG Operations. In order to use WasteNG app you must agree to the
        terms and conditions that are set out below:
      </p>
      <p style={{ fontWeight: "bolder", fontSize: "1.15rem" }}>
        1. User Account Terms
      </p>
      <p style={{ fontWeight: "bolder", fontSize: "1.1rem" }}>
        1.1 The WebApp and the App
      </p>
      <p>
        1.1.1. You hereby declare that You are a human being over 18(eighteen)
        years of age and of a sound mind.
      </p>
      <p>
        1.1.2. If You are under 18 (eighteen) years, but above 12 (twelve) years
        (“Minor”), please read Our{" "}
        <Link
          to={"/privacy-policy"}
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            textUnderlinePosition: "under",
            color: "#001d7e",
          }}
        >
          Privacy Policy
        </Link>{" "}
        and seek consent from Your parents/guardians before proceeding to sign
        up for Our Services through the App or WebApp.
      </p>
      <p>
        1.1.3. You consent to Our collection and use of technical information
        about the WebApp, the Mobile App, and other related software, hardware,
        and peripherals to improve Our products and to provide the Services to
        You. If You use the Services, You consent to Us and Our affiliates' and
        licensees' to process the transmission, collection, retention,
        maintenance, and use of personal data provided to Us, to improve Our
        Services and/or Your experience while using the WebApp and the Mobile
        App
      </p>
      <p>
        1.1.4. You consent to Us, sharing Your personal data provided by You in
        creating Your User Account with third party contractors and service
        providers for the purpose of enabling the efficient performance of the
        Services and effecting any payments or notifications that We need to
        make to You.
      </p>
      <p>
        1.1.5. If You signed up for the Services on behalf of a Minor, you
        hereby confirm that You have obtained the appropriate consent to share
        the Minor's personal data with Us.
      </p>
      <p>
        1.1.6. You acknowledge that {boldedWasteNG()} will use the email address
        and phone number provided by You when creating a User Account on the
        WebApp and the Mobile App or as updated by You from time to time as the
        primary method for communication with You. You must monitor the primary
        User Account email address and phone number You provided to{" "}
        {boldedWasteNG()} and the same must be capable of sending and receiving
        messages, emails, and receiving phone calls. Your communications with{" "}
        {boldedWasteNG()} can only be authenticated if they come from Your User
        Account email address and phone number. You hereby acknowledge that{" "}
        {boldedWasteNG()} may also communicate to you via InApp notification and
        InApp chat features on the App.
      </p>
      <p>
        1.1.7. As part of Our security procedures, You determine Your sign-in
        details or any piece of the information You input. By signing up and
        creating a User Account, You agree to treat Your sign-in details as
        confidential; do not disclose the same to any third party.{" "}
        {boldedWasteNG()} does not have access to Your sign-in details, if You
        forget Your sign-in details or know or suspect that a third party gained
        access to Your sign-in-details, You must promptly change Your sign-in
        details, by resetting Your password or by contacting Us via{" "}
        <Link
          href={"mailto:info@waste.ng"}
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            textUnderlinePosition: "under",
            color: "#001d7e",
          }}
        >
          info@waste.ng
        </Link>{" "}
        to place a restriction on Your User Account.
      </p>
      <p>
        1.1.8. You confirm that all information provided by You via the WebApp
        and the Mobile App are true, correct, and not misleading. You agree to
        provide any additional documents and/or information as may be required
        from time to time.
      </p>
      <p>
        1.1.9. You agree that all agreements, notices, disclosures, and other
        communications that We provide to You electronically satisfy any legal
        requirement that such communications be in writing.
      </p>
      <p>
        1.1.10. By accessing the WebApp and the App, You hereby authorize Us to
        provide the Services herein contemplated using the WebApp and the App.
      </p>
      <p style={{ fontWeight: "bolder", fontSize: "1.15rem" }}>
        A. Using the WasteNG App
      </p>
      <p>
        WasteNG provides an information society service through WasteNG app that
        enables mediation of the requests for collection services between the
        Waste disposal company(PSP) and WasteNG does not provide waste
        collection services. Waste Collection services are provided by Waste
        disposal company(PSP) under a contract (with you) for the collection of
        household users waste. Waste disposal company (PSP) provide
        transport/logistic services on an independent basis (either in person or
        via a company) as economic and professional service providers. WasteNG
        is not responsible in any way for the fulfilment of the contract entered
        into between the Household user (you) and the Waste disposal company .
        Disputes arising from consumer rights, legal obligations or from law
        applicable to the provision of transport services will be resolved
        between the Household users and Waste disposal company. Data regarding
        the Waste disposal company and their Collection service is available in
        the WasteNG app , collection history, and payment for collection
        (subscription)are available on the household user account.
      </p>
      <p>
        1.2 . The Household user (you) enters into a contract with the Waste
        disposal company for the provision of transport/logistic services via
        the WasteNG app. Payment transactions will happen within WasteNG in-App
        Payment. Charges will be inclusive of applicable taxes where required by
        law. Charges may include other applicable fees, and/or surcharges
        including processing fees.
      </p>
      <p>
        1.3 During the installation of WasteNG app, waste disposal company(PSP)
        details is linked to the respective WasteNG user account and added to
        our database. If you are no longer using your mobile number, you must
        notify WasteNG within 7 days so we can anonymize your account data. If
        you do not notify us about any change to your number, your mobile
        operator may issue the same mobile number to a new person who when using
        the WasteNG app then may have access to your data.
      </p>
      <p style={{ fontWeight: "bolder", fontSize: "1.15rem" }}>
        B. Subscription
      </p>
      <p>
        In order to confirm a Subscription, the household user shall be required
        to pay a monthly subscription Fee to the waste disposal company before
        they are eligible for waste collection.
      </p>
      <p>
        Once your payment for that month is successful, your subscription will
        be created for that month.
      </p>
      <p>
        Failure of the household user to pay monthly Subscription Payment, shall
        entitle the Waste disposal company to reserve the right to withhold
        waste collection generated by the household user.
      </p>
      <p style={{ fontWeight: "bolder", fontSize: "1.15rem" }}>
        2. WasteNG in-App Payment
      </p>
      <p>
        2.1 Depending on the payment options supported, you can pay for the
        waste disposal services with a card, transfer or other payment methods
        as and when available through WasteNG App. By providing WasteNG in-App
        Payment service, WasteNG acts as commercial agent for the providers of
        the household user & Waste disposal company. Every Waste disposal
        company has authorised WasteNG as their commercial agent for the
        mediation of conclusion of contracts between the Waste disposal company
        and the Household user, including the power to accept payments from the
        household user and to forward the payments to the Waste disposal company
        and vice versa. Obligation of the waste collection service will be
        fulfilled when the payment is confirmed, You, as a household user is
        responsible for ensuring that the payment takes place.
      </p>
      <p>
        2.2 When making payments by WasteNG in-App Payment, WasteNG receives
        your payments and forwards money to the Waste disposal company. WasteNG
        may ask additional data from you to verify payment method.
      </p>
      <p>
        2.3 When making payment through WasteNG in-App Payment for waste
        collection services, WasteNG is not responsible for possible third-party
        payment costs (e.g mobile operators, internet fees). These service
        providers may charge you additional fees when processing payments in
        connection with the WasteNG in-App Payment. WasteNG is not responsible
        for any such fees and disclaims all liability in this regard. Your
        payment method may also be subject to additional terms and conditions
        imposed by the applicable third-party payment service provider; please
        review these terms and conditions before using your payment method.
      </p>
      <p>
        2.4 WasteNG will be responsible for the functioning of WasteNG in-App
        Payment and provide support in resolving problems. The resolution of
        disputes related to WasteNG in-App Payment also takes place through us.
        For payment support service please contact:{" "}
        <Link
          href={"mailto:info@waste.ng"}
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            textUnderlinePosition: "under",
            color: "#001d7e",
          }}
        >
          info@waste.ng
        </Link>
        . Inquiries submitted by e-mail or WasteNG App will receive a response
        within one business day. WasteNG will resolve WasteNG in-App Payment
        related complaints and applications within two business days.
      </p>
      <p style={{ fontWeight: "bolder", fontSize: "1.15rem" }}>
        3. Waste Collection services
      </p>
      <p>3.1 Waste collection will be weekly at least once per week.</p>
      <p>
        3.2 Household users are required to sort their waste weekly and make
        them available a day before waste collection. In a situation the the
        household user is not around, the waste should be handed over to someone
        within the household or please put all bins out the night before
        collection day and leave out until collected. Make sure all bins are
        placed on the kerbside and are visible from both directions. Do not time
        the trucks as collection schedule/time can vary.
      </p>
      <p>
        3.3 It should be noteworthy that Waste disposal companies are not to be
        allowed to enter Household user apartment. Allowing waste disposal
        company into the apartment is not WasteNG transaction and such shall be
        bored by the household user should any complaint arise.
      </p>
      <p style={{ fontWeight: "bolder", fontSize: "1.15rem" }}>
        4. License to use WasteNG app
      </p>
      <p>
        4.1 As long as you comply with these General Terms and Conditions, we
        agree to grant you a royalty free, revocable, non-exclusive, right to
        access and use the WasteNG app in accordance with these General Terms
        and Conditions, the Privacy Notice, and the applicable app-store terms.
        You may not transfer or sub-license this right to use the WasteNG app.
        In the event that your right to use WasteNG app is cancelled, the
        corresponding non-exclusive license will also be cancelled.
      </p>
      <p style={{ fontWeight: "bolder", fontSize: "1.15rem" }}>5. Liability</p>
      <p>
        5.1 As the WasteNG app is an information society service (a means of
        communication) between Household users and waste disposal companies, we
        cannot guarantee or take any responsibility for the quality or the
        absence of defects in the provision of collection services. As the usage
        of WasteNG app for requesting collection services depends on the
        behaviour of the Household user and waste disposal company, WasteNG does
        not guarantee that you will always have offers available for the
        provision of the collection services.
      </p>
      <p>
        5.2 The WasteNG app does not offer or broker collection services for
        Household users. It is also not an collection or logistic agency service
        for finding Household users for collection providers. The WasteNG app is
        used as the means for organising the provision of collection services.
      </p>
      <p>
        5.3 The consumer's right of refund is not applied to WasteNG app
        subscription.{" "}
      </p>
      <p>
        5.4 The WasteNG app is provided on an "as is" and “as available” basis.
        WasteNG does not represent, warrant, or guarantee that access to WasteNG
        app will be uninterrupted or error free. In case of any faults in the
        software, we will endeavour to correct them as soon as possible, but
        please keep in mind that the functioning of the app may be restricted
        due to occasional technical errors and we are not able to guarantee that
        the app will function at all times, for example a public emergency may
        result in a service interruption.
      </p>
      <p>
        5.5 WasteNG, its representatives, directors and employees are not liable
        for any loss or damage that you may incur because of using WasteNG app
        or relying on, the scheduling experience contracted for through the
        WasteNG app, including but not limited to:
      </p>
      <p>5.5.1. any direct or indirect property damage or monetary loss;</p>
      <p>5.5.2. loss of profit;</p>
      <p>
        5.5.3. loss of business, contracts, contacts, goodwill, reputation and
        any loss that may arise from interruption of the business;
      </p>
      <p>5.5.4. loss or inaccuracy of data; and</p>
      <p>5.5.5. any other type of loss or damage.</p>
      <p>
        5.6 The financial liability of WasteNG in connection with breach of the
        contract will be limited to 5000 Naira. You will have the right to claim
        for damages only if WasteNG has deliberately violated the contract.
        WasteNG will not be liable for the actions or inactions of the waste
        disposal company and will not be liable for damages that the waste
        disposal company causes to the Household user and vice versa.
      </p>
      <p>
        5.7 You agree to fully indemnify and hold WasteNG, their affiliate
        companies, representatives, employees, and directors harmless from any
        claims or losses (including liabilities, damages, costs and expenses of
        any nature) that they suffer as a result of your use of the WasteNG app.
      </p>
      <p>
        5.8 WasteNG may immediately end your use of the WasteNG app if you
        breach these General Terms and Conditions or we consider it necessary to
        protect the integrity of WasteNG app or the safety of generators and
        collectors.
      </p>
      <p style={{ fontWeight: "bolder", fontSize: "1.15rem" }}>
        6. Good practice using the WasteNG app
      </p>
      <p>
        6.1 As WasteNG is not a provider or broker of the collection/logistic
        services, any issues with defects or quality of the collection services
        will be resolved in accordance with the rules and regulations of the
        collection service provider or the relevant public authority.
      </p>
      <p>
        6.2 We ask to report issues in the WasteNG app to provide feedback. This
        enables us to offer suggestions to the waste disposal company for
        improving the quality of their service.
      </p>
      <p>
        6.3 We expect that you use WasteNG app in good faith and be respectful
        of the waste disposal companies who offer their services through WasteNG
        app. WasteNG retains the right to close your account if you have
        violated the terms set out in this General Terms and Conditions or if
        your activities are malicious, i.e. withholding payment for the
        provision of the collection service, fraud, being disrespectful towards
        the waste disposal company, etc. In these cases, your WasteNG app
        account may be revoked without prior notice.
      </p>
      <p>
        6.4 WasteNG will make every effort to ensure that only collectors, who
        have integrity and are respectful of their profession use the WasteNG
        app. However, we are in no position to guarantee that every provider of
        collection services, located by the WasteNG app, satisfies the
        aforementioned criteria at all times. If you experience objectionable
        collection service, please notify the company responsible for the
        service, a supervisory authority or our customer support.
      </p>
      <p style={{ fontWeight: "bolder", fontSize: "1.15rem" }}>
        7. Amendments to the General Terms and Conditions
      </p>
      <p>
        7.1 If any substantial amendments are made to the General Terms and
        Conditions, then you will be notified by e-mail or WasteNG app
        notifications. If you continue using WasteNG app, you will be deemed to
        accept the amendments.
      </p>
      <p style={{ fontWeight: "bolder", fontSize: "1.15rem" }}>
        8. Final Provisions
      </p>
      <p>
        The General Terms and Conditions will be governed by and construed and
        enforced in accordance with the laws of Federal Republic of Nigeria. If
        the respective dispute resulting from General Terms or Agreement could
        not be settled by the negotiations, then the dispute will be finally
        solved in the court of law in Lagos Nigeria. If any provision of the
        General Terms is held to be unenforceable, the parties will substitute
        for the affected provision an enforceable provision that approximates
        the intent and economic effect of the affected provision.
      </p>
    </div>
  );
}
