import React, {useEffect} from 'react';
import ListItem from './components/ListItem';
import {
  SubContainer,
  Headline,
  Subheader,
  AttendeesList as PartnersList,
  MessageContainer,
  Section,
  Title,
} from './StyledComponents';

interface PartnersInterface {
  navigation: any;
  loading?: boolean;
  sectionData: any[];
}

const partners = (props: PartnersInterface) => {
  const {navigation} = props;
  const [partners, setpartners] = React.useState<any[]>(props.sectionData);
  useEffect(() => {
    setpartners(props.sectionData);
  }, [props.sectionData]);

  const RenderEmptyList = () => {
    return (
      <>
        <MessageContainer>
          <Headline>No Partners added</Headline>
          <Subheader>
            When Partners are added to this event, you will see them here
          </Subheader>
        </MessageContainer>
      </>
    );
  };

  return (
    <SubContainer>
      {partners.length === 0 && <RenderEmptyList />}
      <PartnersList
        windowSize={5}
        sections={partners}
        removeClippedSubviews
        keyboardShouldPersistTaps="handled"
        keyExtractor={(_item, Index) => _item.id || Index.toString()}
        renderSectionHeader={({section}) => (
          <Section>
            <Title>{section.title}</Title>
          </Section>
        )}
        renderItem={({item, index, section}) => {
          return (
            <ListItem
              index={index}
              attendee={item}
              data={partners}
              navigation={navigation}
              section={section.title}
            />
          );
        }}
      />
    </SubContainer>
  );
};

export default partners;
