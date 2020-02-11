import React from 'react';
import {Image} from 'react-native';
import Styled from 'styled-components/native';
import {Text, Linking} from 'react-native';
import Accordion from '../components/Accordion';
import {ThemeContext} from "../../../../App";
import {connect} from 'react-redux';
import {fetchEvent} from '../module/actions/';

function Container(props: any) {
  const theme = React.useContext(ThemeContext)
  const [tags, setTags] = React.useState<any>([]);

  const Faq = Styled.Text`
    color: ${props => props.theme.color.charcoal};
    font-size: 18px;
    font-family: ${props => props.theme.fontFamilies.extraBoldFont};
    font-weight: 800;
    margin-top: 10px;
  `;

  React.useEffect(() => {
    (async function() {
      await props.fetchEvent(props.activeEventId);
    })();
  }, []);

  React.useEffect(() => {
    if (props.componentsOrder.length > 0) {
      convertToHtml(props);
    }
  }, [props.components]);

  function openUrl(url) {
    if (url)
      Linking.openURL(url).catch(err =>
        console.error('An error occurred', err),
      );
  }

  function convertToHtml(eventData) {
    console.log('event data', eventData);
    try {
      const {componentsOrder, components} = eventData;
      let Faqs = componentsOrder.map(order => {
        if (components[order].description !== undefined)
          return components[order];
      });
      console.log('Faqs', Faqs);
      let JSElements: any = [];
      JSElements = Faqs.map((faq: any) => {
        if (faq) {
          if (faq.description) {
            let Tags = faq.description.ops.map((value: any) => {
              const {attributes, insert} = value;
              let styles = {
                fontFamily: theme.fontFamilies.latoLight,
                fontSize: 15,
                color: theme.color.blackText,
                fontWeight: '300',
              };
              let url = '';
              // @ts-ignore
              if (Object.keys(insert) == 'image') {
                return (
                  <Image
                    source={{uri: insert.image}}
                    style={{
                      width: '100%',
                      height: 400,
                      alignSelf: 'center',
                      overflow: 'hidden',
                    }}
                    resizeMode={'contain'}
                  />
                );
              }
              if (attributes) {
                if (attributes['color']) styles['color'] = attributes.color;
                if (attributes['bold']) {
                  styles['fontWeight'] = 'bold';
                  styles['fontFamily'] = theme.fontFamilies.boldFont;
                }
                if (attributes['italic'])
                  styles['fontFamily'] = 'Lato-LightItalic';
                if (attributes['link']) url = attributes['link'];
              }
              return (
                <Text style={styles} onPress={() => openUrl(url)}>
                  {value.insert}
                </Text>
              );
            });
            let obj = {
              name: faq.name,
              ops: Tags,
              published: faq.published,
            };
            return obj;
          }
        }
      });
      setTags(JSElements);
    } catch (error) {
      console.log('error', error);
    }
  }

  const elements = tags.filter(
    tag => tag !== undefined && tag.published !== false,
  );
  return (
    <>
      {elements.length > 0 && (
        <>
          <Faq>Practical Information</Faq>
          <Accordion data={tags} />
        </>
      )}
    </>
  );
}
const mapStateToProps = state => {
  const {EventDetailReducer} = state;
  return {
    componentsOrder: EventDetailReducer.componentsOrder,
    components: EventDetailReducer.components,
  };
};

const mapDispatchToProps = {
  fetchEvent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

