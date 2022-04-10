import {PostContainer, Header, Content, Paragraph, ParagraphHeading, ParagraphBody} from '../Post'

import { Icon } from '@iconify/react';

import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'

import w2wFeatured from '../../img/w2w/w2w-featured.png'
import w2wMockup from '../../img/w2w/w2w-mockup-light.png'
import w2wStyleGuide from '../../img/w2w/w2w-styleguide.png'

export default function WhatToWatch(){
    return (
        <PostContainer>
            <Header title="What 2 Watch" img={w2wFeatured} link="https://desmavi.github.io/what2watch/"/>
            <Content>

                <Paragraph>
                    <ParagraphHeading heading="Overview"/>
                    <ParagraphBody>
                        <p>Watch 2 Watch è una responsive web app che suggerisce dei film da vedere in base a dei parametri impostati dall'utente.</p>
                        <h3>Tipologia di progetto</h3>
                        <p>Progetto personale</p>
                        <h3>Strumenti</h3>
                        <Stack direction="horizontal" gap={3} className="mb-3">
                            <Stack direction="horizontal" gap={1}>
                                <Icon icon="logos:figma" /> 
                                <p className="d-none d-sm-block m-0">Figma</p>
                            </Stack>
                            <Stack direction="horizontal" gap={1}>
                                <Icon icon="logos:react" /> 
                                <p className="d-none d-sm-block m-0">ReactJS</p>
                            </Stack>    
                            <Stack direction="horizontal" gap={1}>
                                <Icon icon="logos:react-router" width="18px"/>
                                <p className="d-none d-sm-block m-0">React Router</p>
                            </Stack> 
                            <Stack direction="horizontal" gap={1}>
                                <Icon icon="simple-icons:mui" color="#007fff" /> 
                                <p className="d-none d-sm-block m-0">MUI</p>
                            </Stack> 
                        </Stack>                       
                    </ParagraphBody>
                </Paragraph>

                <Paragraph>
                    <ParagraphHeading heading="L'idea"/>
                    <ParagraphBody>
                        <p>I servizi di streaming hanno dei cataloghi di film vastissimi ma al contempo il sistema di filtrazione è davvero limitato (solitamente si può filtrare solo per genere).</p>
                        <p>W2W nasce quindi per colmare la mancanza  di un sistema di filtrazione avanzato.</p>
                        <p>Essa infatti suggerisce all’utente dei film, permettendo di filtrare i suggerimenti non solo in base al genere, ma anche alla lingua originale, a uno specifico attore/attrice, data di rilascio, rating del pubblico, servizio streaming (in modo tale da ricevere solo suggerimenti relativi a film disponibili su piattaforme a cui l’utente è abbonato).</p>
                    </ParagraphBody>
                </Paragraph>

                <Paragraph>
                    <ParagraphHeading heading="Progettazione"/>
                    <ParagraphBody>
                        <p>Il core dell’app è di fatto questo sistema di filtrazione avanzato, che rimane sempre visibile e accessibile sul lato destro della pagina.</p>
                        <p>Una volta impostati i parametri (se vi sono risultati che corrispondono alla ricerca), all’utente viene presentato un carosello di cards contenente le varie proposte.</p>
                        <p>Ho costruito le card inserendo delle informazioni relative al film proposto, che potessero aiutare l’utente nella scelta. (Ad esempio: poster del film, trama, generi, rating...)</p>
                        <Image src={w2wMockup} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>
                        <Image src={w2wStyleGuide} alt="" style={{maxWidth:"100%"}}/>
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Sviluppo"/>
                    <ParagraphBody>
                        <p>Per lo sviluppo ho utilizzato React JS con l’ausilio di React Router , realizzando di fatto una SPA (single page application).</p>
                        <p>Per poter creare il sistema di filtrazione, le risorse relative ai film mi sono state fornite dall’API di The Movie Database.</p>
                        <p>Per l’implementazione della UI ho adottato la libreria MUI.</p>
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Web App"/>
                    <ParagraphBody>
                        <p className="mt-lg-2">What 2 watch è disponibile a  
                        <a target="_blank "className="text-decoration-underline mb-3 d-inline-block ms-1"  href="https://desmavi.github.io/what2watch/">questo link</a>.    
                        </p>   
                    </ParagraphBody>
                </Paragraph>

            </Content>
        </PostContainer>
    )
}