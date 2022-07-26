import React from "react";
import { DiJavascript, DiCss3, DiHtml5, DiReact } from "react-icons/di";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaShopify } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { List, ListItem } from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Amazings programming languages and tools that I
      <FcLike size="25px" /> to build, design and customize websites.
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem" />
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem" />
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem" />
      </ListItem>
      <ListItem>
        <FaShopify size="3rem" />
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
      </ListItem>
      <ListItem>
        <MdPhotoSizeSelectLarge size="3rem" />
      </ListItem>
      <ListItem>
        <AiFillApi size="3rem" />
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
