import React, {useEffect} from 'react';
import ListItem from './components/ListItem';
import {
    SubContainer, Headline, Subheader, AttendeesList, MessageContainer, Section, Title, LoadingContainer
} from './StyledComponents'
import {ActivityIndicator} from "react-native";
import {ThemeContext} from "../../../App";

interface AttendeesInterface {
  navigation: any;
  fromChat?: boolean;
  loading?: boolean;
  sectionData: any[];
}

const Attendees = (props: AttendeesInterface) => {
  const theme = React.useContext(ThemeContext)
  const {navigation, loading, fromChat} = props;
    const [attendees, setAttendees] = React.useState<any[]>([]);

  useEffect(() => {
      setAttendees(props.sectionData);
  }, [props.sectionData]);

  const renderEmptyList = () =>  {
    return (
        <MessageContainer>
          <Headline>No attendees added</Headline>
          <Subheader>
            When attendees are added to this event, you will see them here
          </Subheader>
        </MessageContainer>
    );
  }

  const renderFooter = () =>  {
    return loading ? (
        <LoadingContainer>
            <ActivityIndicator size="large" color={theme.color.primary} />
        </LoadingContainer>
    ) : null;
  }

  return (
      <SubContainer>
        <AttendeesList
          windowSize={5}
          sections={attendees}
          removeClippedSubviews
          keyboardShouldPersistTaps='handled'
          keyExtractor={(_item, Index) => _item.id || Index.toString()}
          renderSectionHeader={({section}) => (
              <Section><Title>{section.title}</Title></Section>
          )}
          renderItem={({item, index}) => (
            <ListItem
              index={index}
              attendee={item}
              data={attendees}
              fromChat={fromChat}
              navigation={navigation}
            />
          )}
          ListEmptyComponent={renderEmptyList}
          renderSectionFooter={renderFooter}
        />
      </SubContainer>
  );
};

export default Attendees;
