import React from 'react';
import Styled from 'styled-components/native';
import Header from '../../../components/Header';

const Container = Styled.View`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
`;

const SubContainer = Styled.ScrollView`
  max-width: 800px;
`;

const Wrapper = Styled.View`
  padding: 30px;
`;

const NewsImage = Styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 5px;
`;

const EventDetails = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
`;

const Company = Styled.View`
  flex-direction: row;
  align-items: center;
`;

const Logo = Styled.Image`
  width: 30px;
  height: 30px;
`;

const EventVicinity = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 13px;
  font-family: ${props => props.theme.fontFamilies.regularFont};
  font-weight: normal;
  margin-left: 5px;
`;

const DateAndTime = Styled.View`
  flex-direction: row;
  align-items: center;
`;

const Date = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 13px;
  font-family: ${props => props.theme.fontFamilies.regularFont};
  font-weight: normal;
  text-align: right;
`;

const Time = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 13px;
  font-family: ${props => props.theme.fontFamilies.regularFont};
  font-weight: normal;
  text-align: right;
  opacity: 0.3;
  margin-left: 5px;
`;

const Seprator = Styled.View`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.color.borderLine};
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Heading = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 25px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: bold;
  /* line-height: 25px; */
  margin-top: 25px;
`;

const SubHeading = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 19px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  /* font-weight: bold; */
  /* line-height: 25px; */
`;

const Article = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 17px;
  font-family: ${props => props.theme.fontFamilies.latoLight};
  font-weight: 300;
  /* line-height: 25px; */
`;

function index({navigation}) {
  const [heading] = React.useState(navigation.getParam('heading'));
  const [description] = React.useState(navigation.getParam('description'));
  const [date] = React.useState(navigation.getParam('date'));
  const [time] = React.useState(navigation.getParam('time'));
  const [banner] = React.useState(navigation.getParam('banner'));
  const [logo] = React.useState(navigation.getParam('logo'));

  function goBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header title={'News & Updates'} onPress={goBack} />
      <SubContainer contentContainerStyle={{flexGrow: 1}}>
        <Wrapper>
          <NewsImage source={banner} resizeMode={'cover'} />
          <EventDetails>
            <Company>
              <Logo source={logo} resizeMode={'contain'} />
              <EventVicinity>Global Events</EventVicinity>
            </Company>
            <DateAndTime>
              <Date>{date}</Date>
              <Time>{time}</Time>
            </DateAndTime>
          </EventDetails>
          <Seprator style={{marginTop: 0, marginBottom: 0}} />
          <Heading>{`Kickoff dinner & party: Explore the venue to taste the delicious range of street food and drink choices!`}</Heading>
          <Article>{`
After the welcome from NNITMAN on stage the venue will open up for dinner.
`}</Article>
          <SubHeading>{`BARS & BEVERAGES`}</SubHeading>
          <Article>{`You’ll find a wide range of bars around TAP1.
For starters, each of the food bars offers a signature drink to pair with your dinner.
There are three full-service bars serving draft beer, classic cocktails, and a variety of wine. Have no fear, non-alcoholic alternatives are also available at all the bars, too.`}</Article>
          <Seprator />
          <SubHeading>{`STREETFOOD & SIGNATURE DRINKS`}</SubHeading>
          <Article>{`Pick up ONE item per person per food bar to help lines move quickly and ensure each NNIT colleague gets a tasty treat.`}</Article>
          <Seprator />
          <SubHeading>{`KUNG FU PANDA`}</SubHeading>
          <Article>{`This notorious hotdog created for the award-winning Panda enclosure restaurant at the Copenhagen Zoo will make you drool on site!

Visit the hotdog’s creator, Top Chef Casper Sobczyk, while you grab one in Hall 2! This hotdog hottie consists of a homemade Duroc pork sausage and is delightfully spiced with lime and red curry. It’s garnished with a yuzu gel, miso mayo, and both crisp and pickled onions.

Not into pork wieners? We’ve got you covered! This savory hotdog can be made veggie-friendly per request!

Ganbei! What better companion for this spicy dish than a refreshing Passion Mule cocktail? This reinvented mule found in Hall 2 is served “street style” and contains vodka, passionfruit, lime juice and ginger.`}</Article>
          <Seprator />
          <SubHeading>{`THE DEEP-FRIED SOUTH`}</SubHeading>
          <Article>{`Americans can’t seem to get enough chicken nuggets, and after tonight, you may not be able to get enough of this American favorite either!

These crisp, juicy and tender nuggets are made of free-range chicken and served with a chipotle dip, coleslaw, American buttermilk biscuits, and a pickle. This classic American combo will take you to the deep (fried) South! For non-carnivores, vegan nuggets are provided as a delightful substitute.

This All-American-style food stand can be found in Hall 1

Yeehaw! To pair this dish’s southern charm, the Punch Cider cools you off and transports you to a front porch rocking chair with a view. Made with dark rum, Caloric Punch liquor, fresh squeezed lemon juice and apple cider.`}</Article>
          <Seprator />
          <SubHeading>{`BONJOUR, MA QUICHE!`}</SubHeading>
          <Article>{`Come and try the fantastically French-inspired fish-dish made with a confit of salmon and heaps of herbs. This magnifique fish is served with charming mini quiches and Gruyère cheese on the side.

This petite French piece of heaven is located in Hall 1. Bon Appetit!

Santé! Take your French fancy to Paris’ Latin Quarter with an Old Cuban Highball pairing. This culturally complementary creation is made with rum, mint, lemon sour, and bubbly.`}</Article>
          <Seprator />
          <SubHeading>{`AY AY AYYYYY!`}</SubHeading>
          <Article>{`Want to try a tasty TOSTADA Y BARBACOA, amigo? Trust us, it’s muy bien!

Our Baja-inspired food stand serves tender filets of Mexican BBQ-marinated beef on a crispy, smoky tostada, with sides of sweet potato mash and creamy corn. Topping this tostada dish is salsa fresca, a dash of 72% dark chocolate, and a pinch of green.

These lovely Latino vibes can be found in Hall 2.

Not into beef, amigo? No problemo. This dish can be made to accommodate your veggie needs!

¡Vamanos! Grab a GRAN MARGARITA while you are here, gringo! This Mezcal margarita mixes Grand Marnier and freshly squeezed lime juice and is served on the rocks and garnished with Salty Fingers.`}</Article>
          <Seprator />
          <SubHeading>{`WACKY WILLY WONKAS WONDERFUL DESSERT BAR`}</SubHeading>
          <Article>{`Dance all night without your blood sugar levels dropping! Simply pass by this dessert bar to get your chocolate kick, your fruit punch, or your cake cravings taken care of!

As Willy Wonka said, “Candy is Dandy, but Liquor is Quicker.”

Grab a shot of Spiked Strawberry Slush Ice before you hit the dancefloor with your new and preferably improved dance moves!

WACKY WILLY WONKAS WONDERFUL DESSERT BAR WILLYS DESSERT BAR can be found in the Foyer.`}</Article>
          <Seprator />
          <SubHeading>{`REDUCE – REUSE – RECYLE!`}</SubHeading>
          <Article>{`Eat your plate – or don’t! But if you do, it’s completely harmless. All the plates used for the evening are produced by EatAPlate and are 100% biodegradable wheat bran. These platters are produced without any chemicals, artificial colors, or harmful additives. Not only are these plates 100% compostable, they’re also made from a wheat milling by-product used for flour. Bon appetit!`}</Article>
        </Wrapper>
      </SubContainer>
    </Container>
  );
}

export default index;
