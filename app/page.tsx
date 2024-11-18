import { Posts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Yapım aşamasında...
      </h1>
      <p className="mb-4">
        {`I feel therefore I am, etc.`}
      </p>
      <div className="grid grid-cols-4 gap-4">
        <div>Doğum Tarihi<br></br>& Yeri</div>
        <div className="col-span-3">28 Eylül 1988.<br></br>Of, Trabzon.</div>
        <div>Eğitim</div>
        <div className="col-span-3">Bilgisayar Mühendisliği, Koç Üniversitesi (2008-2013)<br></br>Rize Anadolu Öğretmen Lisesi (2002-2006)</div>
        <div>Bildiği Diller</div>
        <div className="col-span-3">Türkçe, İngilizce.</div>
        <div>Karakter Özellikleri ve Yetenekler</div>
        <div className="col-span-3">Yoğun empati duygusu, herkese adil yaklaşım, hızlı öğrenim, vizyoner liderlik, zamanı ve sistemi okuma, mentorluk, yaratıcı fikir üretimi, analitik düşünce, problem çözme, detaylara dikkat, yazarlık, oyunculuk, yönetmenlik, fotoğrafçılık, karakalem çizim.</div>
        <div>İlgi Alanları</div>
        <div className="col-span-3">Sanat, teknoloji, bilim, sağlık, psikoloji, sosyoloji, ekonomi, felsefe, edebiyat, din, sinema, müzik, dans ve tarih.</div>
        <div>Yaşadığı Ülkeler</div>
        <div className="col-span-3">Türkiye, Fransa (5 ay), Amerika (11 ay), Almanya (5 yıl).</div>
        <div>İş Tecrübesi</div>
        <div className="col-span-3">CV'ye <a className="underline" href="https://github.com/ebsaral/CV/blob/main/Emin%20Bu%C4%9Fra%20Saral%2C%20T%C3%BCrk%C3%A7e%20CV.pdf">buradan</a> ulaşabilirsiniz.</div>
        <div>Ek Belgeler</div>
        <div className="col-span-3"><a className="underline" href="https://github.com/ebsaral/CV/blob/main/askerlik-durumu.pdf">Askerlik</a> (yapıldı), <a className="underline" href="https://github.com/ebsaral/CV/blob/main/adli-sicil-kaydi.pdf">Adli Sicil Kaydı</a> (temiz), <a className="underline" href="https://github.com/ebsaral/CV/blob/main/siyasi-parti-uyeligi.pdf">Siyasi Parti Üyeliği</a> (yok), <a className="underline" href="https://github.com/ebsaral/CV/blob/main/ehliyet.pdf">Ehliyet</a> (B), <a className="underline" href="https://github.com/ebsaral/CV/blob/main/transcript.pdf">Transkript</a> (Ort: 2.38).</div>
        <div>Birlikte Çalıştığı Kişi veya Kurum</div>
        <div className="col-span-3">Yok.</div>
      </div>
    </section>
  )
}
