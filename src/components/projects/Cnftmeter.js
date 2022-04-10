import {PostContainer, Header, Content, Paragraph, ParagraphHeading, ParagraphBody} from '../Post'

import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'

import cnftmeterFeatured from '../../img/cnftmeter/cnftmeter-featured-2.png'
import cnftmeterFilter from '../../img/cnftmeter/cnftmeter-filters-attr.png'
import cnftmeterCard from '../../img/cnftmeter/cnftmeter-card.png'
import cnftmeterMockup from '../../img/cnftmeter/cnftmeter-2.png'
import cnftmeterStyleguide from '../../img/cnftmeter/cnftmeter-styleguide.png'

import { Icon } from '@iconify/react'

export default function Cnftmeter(){
    return(
        <PostContainer>
            <Header title="Cnftmeter" img={cnftmeterFeatured} link="https://cnftmeter.io"/>
            <Content>
                <Paragraph>
                    <ParagraphHeading heading="Overview"/>
                    <ParagraphBody>
                        <p>Il 2021 è stato l’anno in cui gli NFT sono entrati in ribalta. Con NFT si intende un modo per identificare in modo univoco, sicuro e senza dubbi un prodotto digitale creato su internet..</p>
                        <p>Possiamo considerare i CNFT come la versione “green” degli NFT, una sorta di fratellastri meno popolari ma più sostenibili, dal punto di vista ambientale.</p>
                        <p>Cnftmeter è un tool per consultare progetti CNFT ("Cardano non-fungible token").</p>
                        <p>L’applicazione permette principalmente ai “traders” di CNFT di analizzare le opportunità del mercato di uno specifico progetto CNFT, dove con opportunità si intende trovare un token con rarità o certi attributi al prezzo migliore in un determinato intervallo temporale.</p>
                        <h3>Tipologia di progetto</h3>
                        <p>Collaborazione</p>
                        <h3>Ruolo</h3>
                        <p>UI Designer</p>
                        <h3>Strumenti</h3>
                        <Stack direction="horizontal" gap={2}>
                                <Icon icon="logos:figma" /> 
                                <p className="d-none d-sm-block m-0">Figma</p>
                            </Stack>
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Design"/>
                    <ParagraphBody>
                        <p>L’obiettivo principale era creare un’interfaccia funzionale e moderna, per poter consultare, ricercare e filtrare progetti CNFT.</p>
                        <p>Ciascun token può contenere decine di attributi e sub-attributi diversi, e la challenge maggiore in questo progetto è stata trovare un modo per poter filtrare e visualizzare tali dati in maniera compatta ed esplicativa.</p>
                        
                        <h3>Filtrazione degli attributi</h3>
                        <p>Criterio importante per il cliente era rendere le categorie espandibili considerata la quantità di attributi.</p>
                        <p>Il risultato è stato un sistema di filtraggio di attributi espandibile e barra di ricerca integrata per facilitare l’utente nella ricerca.</p>
                        <p>Delle chip posizionate alla destra di ogni attributo aiutano l’utente a sapere quanti e quali attributi ha selezionato.</p>
                        <Image src={cnftmeterFilter} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>
                        <p>Anche ogni sub-attributo è ricercabile e per facilitare l’utente quelli selezionati vengono issati in cima all’elenco.</p>
                        
                        <h3>Display degli attributi</h3>
                        <p>Gli attributi sono dati importanti nel progetto poiché essi determinano la rarità di un token.</p>
                        <p>Meno un attributo è diffuso, più la rarità del token aumenta. </p>
                        <p>Il mio obiettivo era consentire all’utente di coglierne “a colpo d’occhio” la rarità.</p>
                        <Image src={cnftmeterCard} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>
                        <p>Per visualizzare questi dati in modo esplicativo, ho optato per dei “Circular indicators” accanto ad ogni attributo, differenziando quelli rari in verde e indicando la percentuale di diffusione di ciascuno.</p>
                        
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Handoff"/>
                    <ParagraphBody>
                        <p>L'handoff della UI al team di sviluppo è avvenuto tramite Figma, dove ho fornito i mockups desktop e mobile, il prototipo e lo Style Guide </p>
                        <Image src={cnftmeterMockup} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>
                        <Image src={cnftmeterStyleguide} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Web App"/>
                    <ParagraphBody>
                        <p className="mt-lg-2">Cnftmeter è visionabile al seguente 
                        <a target="_blank "className="text-decoration-underline mb-3 d-inline-block ms-1"  href="https://cnftmeter.io">link</a>.
                        </p>   
                    </ParagraphBody>
                </Paragraph>
                
            </Content>
        </PostContainer>
    )
}