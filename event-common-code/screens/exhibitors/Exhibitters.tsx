import React, {useEffect} from 'react';
import ListItem from './components/ListItem';
import {
  SubContainer,
  Headline,
  Subheader,
  AttendeesList,
  MessageContainer,
  Section,
  Title,
  LoadingContainer,
} from './StyledComponents';
import {ActivityIndicator} from 'react-native';

interface ExhibitorsInterface {
  navigation: any;
  loader: boolean;
  sectionData: any[];
}

const Exhibitors = (props: ExhibitorsInterface) => {
  const {navigation, loader} = props;
  const [exhibitors, setExhibitors] = React.useState<any[]>(props.sectionData);

  useEffect(() => {
    setExhibitors(props.sectionData);
  }, [props.sectionData]);

  const RenderEmptyList = () => {
    return (
      <>
        {loader ? (
          <RenderFooter />
        ) : (
          <MessageContainer>
            <Headline>No Exhibitors added</Headline>
            <Subheader>
              When Exhibitors are added to this event, you will see them here
            </Subheader>
          </MessageContainer>
        )}
      </>
    );
  };

  const RenderFooter = () => {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#780000" />
      </LoadingContainer>
    );
  };

  return (
    <SubContainer>
      {exhibitors.length === 0 && <RenderEmptyList />}
      <AttendeesList
        windowSize={5}
        sections={exhibitors}
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
              data={exhibitors}
              navigation={navigation}
              section={section.title}
            />
          );
        }}
      />
    </SubContainer>
  );
};

export default Exhibitors;
