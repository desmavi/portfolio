import {PostContainer, Header, Content, Paragraph, ParagraphHeading, ParagraphBody} from '../Post'

import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'

import mockedFeatured from '../../img/moked/moked-featured.png'
import mockedMockup from '../../img/moked/mocked-mockup.png'

import { Icon } from '@iconify/react'

export default function Mocked(){
    return(
        <PostContainer>
            <Header title="Mock-de" img={mockedFeatured} link="https://desmavi.github.io/mockde/"/>
            <Content>
                    <Paragraph>
                    <ParagraphHeading heading="Overview"/>
                    <ParagraphBody>
                        <p>Mock-de è una parola che ho inventato e sta per "from <strong>mock</strong>up to co<strong>de</strong>".</p>
                        <p>Infatti una delle cose che preferisco fare è riprodurre in maniera fedele dei mockups in codice.</p>
                        <p>Per questo progetto ho voluto semplicemente ricreare questo grazioso mockup realizzato da Finsweet.</p>
                        <Image src={mockedMockup} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>
                        <h3>Strumenti</h3>
                        <Stack direction="horizontal" gap={1}>
                                <Icon icon="logos:react" /> 
                                <p className="d-none d-sm-block m-0" >React, React-bootstrap, librerie di animazioni.</p>
                            </Stack>  
                        
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Live website"/>
                    <ParagraphBody>
                        <p className="mt-lg-2">Il risultato è disponibile al seguente 
                        <a target="_blank "className="text-decoration-underline mb-3 d-inline-block ms-1"  href="https://desmavi.github.io/mockde/">link</a>.
                        </p>
                    </ParagraphBody>
                </Paragraph>
                
            </Content>
        </PostContainer>
    )
}