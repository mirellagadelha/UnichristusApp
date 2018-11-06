import React, { Component } from 'react';
import { Container, Header, Content, Accordion } from "native-base";


const dataArray = [
   { title: "Como posso ingressar na Unichristus?", content: "Por meio de vestibular, como transferido ou como graduado." },
   { title: "Como faço a inscrição para o vestibular?", content: "Os interessados devem fazer sua inscrição no período determinado por edital para inscrições, por meio da Internet ou na Unichristus." },
   { title: "O que é NPJ?", content: "É o órgão encarregado de implementar, orientar, supervisionar e controlar as atividades de estágio dos alunos do Curso de Graduação em Direito da Unichristus. O NPJ conjuga a atribuição do ensino da prática jurídica aos estudantes de Direito com o atendimento à comunidade carente, nos termos da Lei 1.060/50. Atendendo ao espírito da lei, as atividades realizadas no Núcleo de Prática Jurídica da Unichristus serão feitas em parceria com a Defensoria Pública." },
   { title: "O que é EDH?", content: "O ESCRITÓRIO DE DIREITOS HUMANOS, criado em 2005, é composto por professores do Curso de Direito, atua em prol de uma sociedade inclusiva, estudando conteúdos ligados aos Direitos Humanos e objetivando disponibilizar orientação, formação, capacitação, pesquisa e assistência jurídica nessa área." }
  ];

export default class HomeScreen extends Component {
	render() {
		return (
         <Container>
            <Content padder>
               <Accordion dataArray={dataArray} expanded={0}/>
            </Content>
         </Container>
		);
	}
}
