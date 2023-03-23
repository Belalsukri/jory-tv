import Accordion from 'react-bootstrap/Accordion';

function Accordionex() {
  return (
    <div class="container">
    <div class="row my-5">
      <div class="col-md-6 mx-auto text-center">
        <h2>طريقة تشغيل الاشتراك </h2>
        <p>لتشغيل الاشتراك تحتاج الى شاشه سمارت مثل سامسونغ
           او الجي او تعمل بنظام اندرويد وتحتاج الى سرعة انترنت جيدة .  بعد التواصل معنا وذكر نوع الشاشه نعطيك اسم التطبيق المناسب لجهازك   </p>
        
      </div>
        
    </div>
    <div className='ml-lg-5 p-lg-2'> <h5 className='ml-lg-5'>اكثر الاسئله الشائعه </h5></div>
    <Accordion className='col-10  mx-auto text-center' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
      
        <Accordion.Header>ما هي الأجهزه التي يمكن تشغيل الأشتراك عليها
        </Accordion.Header>
        
        <Accordion.Body>
          يمكن تشغيل الاشتراك على الشاشات الذكيه التي يمكن تنزيل برامج عليها واجهزه الموبايل والتابلت والكمبيوتر 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>كيف  يمكنني الاشتراك</Accordion.Header>
        <Accordion.Body>
         يجب عليك التواصل معنا عبر الواتس اب وسوف نطلب منك تنزيل التطبيق المناسب على جهازك ونقوم بعمل تجربه 24 ساعه تختبر فيها الاشتراك وبعد انتهاء التجربه اذا اعجبك الاشتراك نقوم بتفعيل المده التي تحددها شهر او ثلاثة اشهر او ستة اشهر او سنه او سنتين
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>كيف يمكنني الدفع</Accordion.Header>
        <Accordion.Body>
         يمكنك دفع سعر الاشتراك عن طريق باي بال او تحويل بنكي او طرق اخرى يمكن الاتفاق عليها 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>ماذا افعل اذا لم يكن لدي الخبره بتنزيل التطبيقات </Accordion.Header>
        <Accordion.Body>
         يمكنك التواصل معنا وسوف نقوم بمساعدتك بتنزيل التطبيقات وتفعيلها لدينا فريق عمل لديه  خبره الكافيه في جميع الاجهزه لاتتردد بلاتصال بنا 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>شاشتي ليست ذكيه لايوجد فيها تطبيقات</Accordion.Header>
        <Accordion.Body>
        يمكنك شراء جهاز اندرويد بوكس يجعل شاشتك ذكيه تتوفر اجهزة اندرويد بوكس بمعظم المتاجر ويوجد لدينا اجهزه ممتازه يمكن ان نوصلها الى عنوانك 
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
  );
}

export default Accordionex;