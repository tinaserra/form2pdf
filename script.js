// Insertion des elements dans le pdf
function displayPdf(){

    //var
    var form_name = document.querySelector('.formName').value;
    var form_prenom = document.querySelector('.formPrenom').value;
    var form_mail = document.querySelector('.formMail').value;
    var form_phone = document.querySelector('.formPhone').value;
    var body = document.querySelector('body').value;
    
    // isertion
    body.innerHTML = `
        <div class="pdf_page">
            <div class="content">
                <h1>Super doc de la mort</h1>

                <div class="top">
                    <p>Veuillez verifier toutes vos informations avant de valider.</p>
                    <button class="btn-generator">Telecharger en format pdf</button>
                </div>

                <div class="doc">
                    <h2>Super titre de la mort qui tue</h2>
        
                    <div class="elements">

                        <div class="info">
                            <p>Nom :</p>
                            <span>${form_name}</span>
                        </div>
                        <div class="info">
                            <p>Prenom :</p>
                            <span>${form_prenom}</span>
                        </div>
                        <div class="info">
                            <p>Mail :</p>
                            <span>${form_mail}</span>
                        </div>
                        <div class="info">
                            <p>Telephone :</p>
                            <span>${form_phone}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
}