// import gql from "graphql-tag";
// import {client} from "../../../../../App";


export const fetchChatList = async () => {
  // try {
  //   if (eventId) {
  //     return client.query({query: GET_ATTENDEES, variables: {eventId}})
  //         .then(({ data }: any) => {
  //           return data.attendees
  //         }).catch(e => console.log('Error in fetching attendee', e.message));
  //   }
  // }catch (e) {
  //   console.log('User fetching error :', e.message)
  // }
  return CHAT_DATA
}

// const GET_ATTENDEES = gql`
// query getAttendees($eventId: ID!) {
//   attendees(eventId: $eventId) {
//     id
//     created
//     confirmed
//     name {
//       first
//       last
//     }
//     employment {
//       position
//       company
//     }
//     imageUri
//     status
//   }
// }
// `;

const placeholder = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8NDxAQEA0PDQ0NDQ8PEBAPDw0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFyAzODUtNygtLisBCgoKDg0OFQ8QGysdHR0tLS0tLS0rLS0tLS0tLS8tKy0tLSstLS0tKystNzctLS0tLi0tLSstLS0tLS0tLSstLf/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUHBgj/xABAEAABAwICBwYCBwcFAAMAAAABAAIDBBESUQUTITFBYZEGFFJxgaEHsRUiMkJiovAII4KSwdHhM0NTcrIWJGP/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKxEAAgEDAwMEAQQDAAAAAAAAAAECAxESBBNRITFBFCJhgZFCcaHwBSNS/9oADAMBAAIRAxEAPwDxOqKOqWgKdHu5XTunmrRlAQoiNXxAj3dLcNPSlERo6tXe7p2oS3Clpig2NPDVd7uj3dG4NaexSwJavZyV0QFIwGyNwPTmaWKJsa0nQHJROiOStTMJaYoviTTGVeMRyTTCck8yfTlAxpmFX3QnJRmHknmQ9OymQmkK2YtlkzUoyJdForIFSuiQ1adyMWRJJ+BDAUCGlBOwlDAUBcaijgKWApBc9x3RHufJeg7ol3RcGZ9DgYAo+ScKPkt4UaeKNLMeBgCj5Jwo+S9AKNOFGjMeB58UfJO7mMl6AUacKNG4G2efFGMkTRDJeg7ml3NG4G2ebfQ8lCaEZL076JV30XJUqpLpHnu4jJNdRDJb/dDkmOpuSrdIdE88+i5KB1HyXonQKJ1OrVUzlQTPNyUhyVY029enkpVVfRrRVTCelPOPpyotQvQvolA6iVqojllpHcw3Qphj5LYkolE6kV5oxlp5X7GVhQLVfdTHJM1Cq6MHCSKWFDCrnd0e7ouK0jrOrR1abrE4PK8bI+txFq0Q3kldFLIeIQEbIAJ2FGQ8RWRSwI6pGQYgSThAj3ZLIeJGUxw8lM6l5rxnbTtZHQ3hjIlq9l47nDCCAbyEciCBv2prr0RMrJXZ6hzQq8tlxTSPamtndidUSRjgyBz4WD+U3PqSvWdi+1Tp3No6l/752yGZxH70/wDG78WR4+e+3BpXM1NN2PaSOGarukGasP0Y/MqF2i35lJSRWLIJJRmq75Qp5NFv5qu/Rj+atSXJLiyF0yhdMpnaMfzUbtGPyKvNcmbg+Cu+ZQumVp2jX5FRO0a/Ip5onBlR8yhdMrjtHOyKjdo92RVKoQ6V/BTMqGuVo6Pdkh3B2RVbhGwuDrQoU8UStJwXJtnbmVRRBO7kFaCcjAM2UxRBOFEFbsnAJ4IM2VBRhOFIFbDU4NTwQZsqilCeKVqkdPG17YnSMErwSyMvaHvA3lrSbn0VgMTwQs2ZOmGPjpqiSBmsqGQSvgjtfHKGktbz22XzBVyySSPkmL3SvcXSOkvjc/je6+naXtVo6WZtLFW08k7nFrI2SBxc4cARsJ9Vyv46aFdHVw1ww6qoibAdwdr2Yje3G7SNvJVFWIk7nMEgSNoJBFiCDYtI3EHgU4pWVGZ9Ldn521FFSVDx+8mpaeWS27G6ME+5Ktuij5rG+FlbHV6Lpw1w1tKxtJMzi1zBZp8i3CeuS9U+gWeCNs3yZTo41GY4lov0ceShdo0owiPKRTMMSaYI8lZdo0qN1A5GERZSKzoI8lC6GPwq2aORMdSPyRjAWUii9kfhUDhF4VoPonHgq7tGOTtTFeZTLYvChq4vCFZ+inJfRbkv9Ye89bgCcIwgGpwYgoWAJwYEsCcGIsAAwJwYEQxERosAgwJ4aEBGniNOwrnAPjNPbSbXsJbKxmx7SWvYGnA0AjaNrXn+IrzjO2ulAzVd/qTHbDhc/HdtrWLiCSLc127tX8MqaukqKsF4rJYXMjD5Hd2bNhAbIWgYha17A2uSSCvnmrpzFLLC/wD1IpJInjJ7HFp9wVRDIA0mzW7CbBv/AG4L6J0x2Xi05QU4c6alqaLvNMGPLXBlUwCN7ZdhxtxRtIc07Qea+eGuLSHA2LSHNPEEG4K7d8JO09dLUd1q4XamVkj2VQiLGSVP2/rOAwl7m4zcEXDRs4kYI4/p3RMtFUS0k4tJE4tJs8MkaCQJGYgCWmxsbbVQuvrTS3ZWgqZWVdVTRSzQss2SQXwsBLrOG5wBJO0G1yvmftvp86Qr56ywEZdq6doaBanZcMvbeSNpvnbcAmJkfZjtPVaOmM9K5oc5mrkZIC+KVl7gOaCNx3G9xc5lfQHYPtpDpWEkWiq4wO8U97lvDWM8TD7bjz+ZVuditLOo9I0dSHFrW1EbJt9nU73BsgOf1ST5gHghgmfUjgoyFddAmGBTY0uVDdMKuGnTDTpWHdFJyjddXjTFMNKpaY7ooOKYVfNIh3NS4sd0Z5QstDuSHcVOLHdF4R8kRGoxUt5Jwqm8lvYyuSBiOBRd8Z+gUu+tTsK5OGJwYq/fm5eyH0gMigLlsMRDVT+kPwpwruSBFwBeU+IuiNHOop6yvpNe2mYZMUILKjeBYPaQQN17m1hc7l6Dv34VDWvbNFJBKzFFLG+KRviY5pa4dCmI+RZnNLiWgtZc4Wl2ItbfYC6wubcbC+QXb/2e9J0vd6miAayu1xnfcm9TBYBrmg+HaCBmDxXFtKUD6aealk+3BK+FxItiwmwdbmLH1TKGskgkZPC90U0bg+ORhs5jswf1e6BH0j8Y+0Qo9FyxNdaorQaWEA2cGOH71/kGXF83NXzOVrdpO0VVpGYVNXIJJWxMhaQ0MaGNyaNgJJJPM5WAyUABB+4+R+SKlp48T2MO58jGfzOA/qgD7Ciqhhbv+y3b6JxqW80jABsHDYonQFRdmyURPq2hQSVWy4d6JPprqI0izcpGijEjfUyHYNozvayia6TxuVkQ2QMah3LSQI5XAbTfzSFVbebqMtsmOtxSyaDFMnNXkeqHezy91SeMiotuanNhgi1j5N6IYvLooAVIxw4j3XZexxWuPvzR9UW4Ofsp24UtwtU7lcIgq1dvJHZkluD2iuHFOBKm2ZJwcjMe0yIEpwDlMHjJEPCMh7Zwf42aDdDWsrgDq6xga82NhURNDfS7MP8AK5c5X1H220AzSVDLSEhsmyWnef8AbqG/ZPkdrTycV8w1ED43vikaWSRvdHIw72PabOafIhUmZyjYiSRSTJApqP8A1Yrb9bHbzxiyiW32GoO8aUoIODquJ7ubY/3jh0YUMZ9VukGajdJzUeqKaYzkoubWE+oI4qJ1UeSTouSidFyUNjswuqTkFGajkkYUwwqWHUTqg5FROn5JxhTDCp6D9xG6UJmsCkMITdUEvaHvJ2Sxj7h6qYTQ+ErLa8Zp4cM0Zgka7HQcx5qwx8XA3WICM08EZp7g8TbxxHiPVSN1fiCxWSEbiPWx+anZU8HMYRyGE9QqVRBizXaGZhHVtzCzQYz4m+uIIiPJwPUKs0LBmjqW5hLUjNUmwv4exUojfzVX+CbPksiAZrlfxu0LRQUb60QRivqqiCATWOM2+u51t18EZF7X2rpzQ7Mrjn7Qk78WjoiTgtWSW/ENU0HoT1TViZXt3OPpJIKzMS978EafHpmI7P3dNVSbeH1Qy/514JdF+BAd9LuLeFBUF3JusiHzISYLufQhjKbqynY3cvUoY35N6qehr1GOiUL4SrBfJkOoQxv/AA+ylpFJspuiKifGVoF78h7KN0r/AABQ0jRNme5hyULg7JaTpXf8fzUbpD/x9CsmlyaL9jMcHZD2Qs7JXXzf/k73TNcP+J/QrN/uVYo9wPPqERQHM9AmtnepBUPUbhp6dcA7g7NEUL/0U8VLk8VTlWcSfTjG0TlK2hdmnCqKe2qKpOJLpPgaKJ3iU4o3ZosqlMypWkcTNxkvA1tK7NSsgd4lMx/H+ye2QLZRRk5MTGO4uv5i64Z+0IT32iHAUbyPMym/yC7sHLgXx/qcWkoIuEdBGRnd8sl//IWiMmcwSSSVECXYf2fGxl1ecI7y0U4xkm+odi+qB/2bcnmMlx5dJ+A+kBFpR8LnhramklY1p/3JWOa9oHPCJPdJlR7nenB2SgffJXyQo3kZrJxNoz+DOdI7hf3UTqh44lX34cx1Vd9vEOqxknybxafgpurH/oBRmufyViQDMdVXewcuqwk5LybRjFjDpF2XzTDpR2Xug9gyHVQvjCyc5GipIlOlTkeqH0ocj1H9lVdEm6pRuPkrZZaFQ3knCpbyWI0O5KRoOaLm2234NkVI5JwqRkOqyGg5p4808mG18GsKpuSe2rbkspp5qVjyNxI8iqU5EuijWbVMy/opmVTMgstlS7i6/nY/NWYqrhdv8rVtGZhOj/bmmypacuqsMkHLqqUbjvLRbPCFbj28B0XVFs45xSJ2lcE+PdLEzSMMjRLrp6YSTOe68Ra04GNjHC2FxI/EDxK720Lhn7QbCK6kdwNEQMriV1/mFqu5zvycpKSRSCszHAL6S+FfZaGk0fTTOhYaydneZJXsbrYxK0FsYcRdoDMIIzvmuL/Dfsu7SVdHDb/68RbNVOO4Qhwuzzd9kep4L6idhAsANgsANwClmlrJfJC96rSzgcCppZmN+0QPNZ1VXwj7w9AFlOVjalByfZglqR4SqclUMlVqNIx5/JUJtIxeIdVxTm32PTp6flGg+qGXzUJqL/d+ayZNLQj77VWk03CP9we6yxkzpVOK82+zbdL+H3UZkOXuvPSdoIh98dCq8naOPxD8wS2ZvwO9NfqX5PRSTkcPdM7wvKzdoW8HD8yh/wDkPMfmVLTz4Idemv1Hpe9oir5H2WOK3mE4VvMKsD0Paa/ezkfZOFUfCeoWSK3mE8VnMJ4jxiagqnZe4TxVOy91mCr8kRVoshbaNUVLsvdPjncDcbD5rJFWfD7qRtWfD7qrIl0lwehj0rNuvf1VqHSMuRPqvNR1p8Pur0GlbfdPVWpPk5amlXiKPV0lW928dSQuS/tBVxMtBTbPqRVE7rbftuY1v/hy6JS9oGDex/pYrifxe0qKnSsjm3DYaengGLYbgGQ+8i6qbT8njaqjKn1cbI8WkEElscB1L9n+oI0hUxjc+ge4+bJorf8Asrtde+QA4bdVwX4HTNbpV2IgA0NQLkgbccR/ou0aTrIeEkgP4JDbpdZT8nZp4ObXS/0ZFZWOBINr8dqyaittvT6+bEbh8h/7EFZU738HX8wFxPufS0qVo9gzaRbn7qo+saePyVSprHjewH0WdLWA/dAVxhc56uoUHZv+GjUkmH6sq75W5H8qzu/W+6EDpEeALRU5HLLVUn5LjpBkfyqFzxkfyqs6vHhUZrBkqUGYS1FPksOIyP5UzZkfyqA1H4fZDXnw+yrFmTqwNDvPNEVXNUdS79FEQnl1RhEfqahfFXzCeK3yWeKc5jqnCA5jqlhEtaqqXxXqRukfJZ4p+Y6qQU34gk4RNI6qsaLdKBSs0s3mssUw8Q908UzOLwFLpwN46uvyv4NZul2c+ikbpdniPQrIbTxbtYP16qdlFH4+g/yocIrk3jqq8v8An+/Zsw6daNzyPQrlHa2q1tfVS3vim35gNDf6LoXc4R989F4HtdQ6mqcQbxygSsPpZw6g9QtaNk7HD/k85Uk2l0fgxUkkl0nhm72InbHpCnkeA5jTLiaSRe8TwN3Mg+i6fUaWhduaB5Fy45oycRzxSO+w2RhftI+pf627lddPeymHEEcPrLmrrqj3P8XNqnJK3R+WyWavj4YvR7gqj6xp3GQeT7pONPvA/N/lVZKiDhh/nbf5rOMfhnZV1El5j9D31OT3+uE/0VOV195J/hCa/SNMNhcwfxXt0UT9KUoF8bfS5PRbRjbwefVr595L8sD2/qyhc0p/0lARfE23nt6KI6Up92IdHf2WiucMseQEJhUxq4rXGG2d2/3VeTSkI5+W1UmzJ25Di80dYcz1UH0vF4T0S+l4sj/KE/oV1yXw53hv/EkZZPD1d/hUhpqK3+mfLC1RHTp+7E0Dmf8ACX0O65NLHIeDP5nH+iI1uTPTF/ZZr9Pu+6wDzN/kEPp+W32W3z226I6jvHlmw1s2QUrWzcug/uvLzaUndcGQgHg2zffeqxldfFjdiG52I3HqlZj3Irn8ntDBK7e4DjsAH9VDKQz7c7W8i6IHovKS10rhhMjy3IuO3zzVeyMWN1o+E/yendpaFptrJHbNpYG26kJ40/CATilcdwad59bW915VJPBEqvJdj0bu0g3tbIOWN1uoKzdM6SFQxrdXhex2IPMjnEgixbY+nRZyKMUJ1ptWbKySTt58ykmZAWhDWSNAwvdu4m491QU0Z2IBMuSaQmcLGR1shZvyVVJJMbbfcCSKSYgJJJWQICKVkrIACSckgAXSSSSGG6V0LJWQAboXSsjZAAuilZGyAAkjZKyAAijZKyAK0m8pqfKNpTEAJTxDYoFZi3BABslZOslZMBtkrJ1krIAbZKydZFAhtkrJySAG2SsjdLEgBtkrIpJACyVk5IJgCyVk5JAAwpWTrpIAbZKyKV0AKyVkroOOzagCvMdvomJEpJDArcX2R5KrZTwv2WPBAEySjMwTXTZJiJklXEpSMpKAJ0C4Diq5eU0lAFgyhDWBQJJAT3SuoE66AJ0kkkAFJBJADkkAkUAFJNRQAkiVI9otf8JPrZUkXG1YkdNluzKY+QlMKSBCSSSQMISSSQIKCSSAEkhdEoASCKCBiRSQQAUkEkCP/9k='
const CHAT_DATA = [
    { id: '01', name: { first: 'John', last: 'vick' }, date: '2020-01-23T01:55:13.161Z', imageUri: placeholder,
        messages: [
            { imageUri: placeholder, name: 'john', sender: false, text: 'this is first message i am send you as some wishes', date: '2020-01-13T01:55:13.161Z' },
            {
                imageUri: placeholder,
                name: 'john',
                sender: true,
                text: 'Hi Andrea! What’s up?',
                date: '2020-01-13T01:55:13.161Z'
            },{
                imageUri: placeholder,
                name: 'john',
                sender: true,
                text: 'Hi Andrea! What’s up?',
                date: '2020-01-13T01:55:13.161Z'
            },{
                imageUri: placeholder,
                name: 'john',
                sender: false,
                text: 'Hi Andrea! What’s up?',
                date: '2020-01-13T01:55:13.161Z'
            },{
                imageUri: placeholder,
                name: 'john',
                sender: true,
                text: 'Hi Andrea! What’s up?',
                date: '2020-01-13T01:55:13.161Z'
            },{
                imageUri: placeholder,
                name: 'john',
                sender: false,
                text: 'Hi Andrea! What’s up?',
                date: '2020-01-13T01:55:13.161Z'
            },{
                imageUri: placeholder,
                name: 'john',
                sender: true,
                text: 'Hi Andrea! What’s up?',
                date: '2020-01-13T01:55:13.161Z'
            },{
                imageUri: placeholder,
                name: 'john',
                sender: false,
                text: 'Hi Andrea! What’s up?',
                date: '2020-01-13T01:55:13.161Z'
            }
            ]},
    { id: '02', name: { first: 'John', last: 'vick' }, date: '2020-01-13T01:55:13.161Z', imageUri: placeholder, messages: [{ name: 'john', text: 'this is first message', date: '2020-01-13T16:55:13.161Z' }]},
    { id: '03', name: { first: 'John', last: 'vick' }, date: '2020-01-21T11:55:13.161Z', imageUri: placeholder, messages: [{ name: 'john', text: 'this is first message', date: '2020-01-13T01:55:13.161Z' }]},
    { id: '04', name: { first: 'John', last: 'vick' }, date: '2020-01-22T01:55:13.161Z', imageUri: placeholder, messages: [{ name: 'john', text: 'this is first message', date: '2020-01-13T21:55:13.161Z' }]},
    { id: '05', name: { first: 'John', last: 'vick' }, date: '2020-01-01T01:55:13.161Z', imageUri: '', messages: [{ name: 'john', text: 'this is first message', date: '2020-01-13T01:55:13.161Z' }]}
]
