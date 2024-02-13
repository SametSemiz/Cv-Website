var isCertificateShown = false;
var isCreateState= false;

function showCertificates() {
    var container = document.getElementById('certificateContainer'); 

    
    if(!isCertificateShown) {
        container.style.display = 'block';

    var certificateName = [
        'Bilisim Hukuku Sertifika',
        'CYBERSECURITY ATTACKS AND DEFENSE STRATEGIES (ARTICLE)',
        'Genel İş Sağlığı ve Güvenliği Sertifikası',
        'İlk Yardım Sertifikası',
        'İş Yerinde Psikolojik Taciz (Mobbing) - Sertifika',
        'Ofiste Sağlıklı Yaşam Sertifikası',
        'React101 Eğitim Sertifikası',
        'Unity Ile Egitici Oyunlar Sertifika',
        'Uygulamalı Sıfırdan Linux Terminal Eğitimi',
    ];
        var certificateDate = [
        'May 29, 2022',
        'May 5, 2023',
        'April 7, 2022',
        'April 7, 2022',
        'April 8, 2022',
        'April 8, 2022',
        'November 9, 2022',
        'November 26, 2022',
        'February 11, 2022',
    ];

    if(!isCreateState) {
        

    var row = document.createElement('div'); 
    row.className = 'row'; 

    certificateName.forEach(function(name, index) {
        var col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 wow fadeInUp mb-4';
        col.innerHTML = `
            <a href="https://drive.google.com/drive/folders/1wTLh1eseodGYyxHTeEoR9OWe4VEXt1DN?usp=drive_link" target="_blank" class="card-auto-link">
                <div class="card-auto h-100 rounded">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${certificateDate[index]}</p>
                    </div>   
                </div>
            </a>
        `;

        row.appendChild(col); 
    });

    container.appendChild(row); 

    isCreateState = true;
    }
    isCertificateShown = true;
    document.querySelector('.btn-theme').textContent = 'See Less'; 

    } else {
        document.querySelector('.btn-theme').textContent = 'See More'; 

        container.style.display = 'none'; 


        isCertificateShown = false;
    }
    
}
