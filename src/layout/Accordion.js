// const Accordion = ({ accordionsItem, accordionID, content }) => {
const Accordion = (props) => {
  return (
    <>
      <div className="accordion accordion-flush" id={props.accordionID}>
        {props.accordionsItem.map((accordionsItem) => (
          <div key={accordionsItem.id} className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#flush-collapse" + accordionsItem.flushID}
                aria-expanded="false"
                aria-controls={"flush-collapse" + accordionsItem.flushID}
              >
                {accordionsItem.titleItem}
              </button>
            </h2>
            <div
              id={"flush-collapse" + accordionsItem.flushID}
              className="accordion-collapse collapse"
              data-bs-parent={"#" + props.accordionID}
            >
              <div className="accordion-body">{props.content}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;

// const Accordion = ({ accordionsItem, accordionID, content }) => {
//   return (
//     <>
//       <div className="accordion accordion-flush" id={accordionID}>
//         {accordionsItem.map((accordionsItem) => (
//           <div key={accordionsItem.id} className="accordion-item">
//             <h2 className="accordion-header">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target={"#flush-collapse" + accordionsItem.flushID}
//                 aria-expanded="false"
//                 aria-controls={"flush-collapse" + accordionsItem.flushID}
//               >
//                 {accordionsItem.titleItem}
//               </button>
//             </h2>
//             <div
//               id={"flush-collapse" + accordionsItem.flushID}
//               className="accordion-collapse collapse"
//               data-bs-parent={"#" + accordionID}
//             >
//               <div className="accordion-body">{content}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Accordion;
