import React from "react";

class FilesDetails extends React.Component {
  render() {
    const file = this.props.information;
    return (
      <tbody style={{ fontSize: 14 }}>
        {/* {files.map((file, index) => { */}
          {/* return ( */}
            <tr className="text-left" >
              <td className="align-middle">
                <span style={{ height: 48, width: 48 }}>
                <img
                  style={{ height: 36, width: 36 }}
                  src={file.fileImg}
                  className="rounded"
                  alt="file icon"
                /></span>
                <span className="pl-3">{file.fileName}</span>
              </td>
              <td className="align-middle"></td>
              <td className="align-middle">
                <span>{file.createdBy}</span>
              </td>
              <td className="align-middle">
                <span>{file.createdAt}</span>
              </td> 
              <td className="align-middle">
                <span>{file.size} Mb</span>
              </td>
              <td className="align-middle">
                <span>
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.70711 2.70711C2.89464 2.51957 3 2.26522 3 2C3 1.73478 2.89464 1.48043 2.70711 1.29289C2.51957 1.10536 2.26522 1 2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2C1 2.26522 1.10536 2.51957 1.29289 2.70711C1.48043 2.89464 1.73478 3 2 3C2.26522 3 2.51957 2.89464 2.70711 2.70711Z"
                      stroke="#364152"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.70711 2.70711C9.89464 2.51957 10 2.26522 10 2C10 1.73478 9.89464 1.48043 9.70711 1.29289C9.51957 1.10536 9.26522 1 9 1C8.73478 1 8.48043 1.10536 8.29289 1.29289C8.10536 1.48043 8 1.73478 8 2C8 2.26522 8.10536 2.51957 8.29289 2.70711C8.48043 2.89464 8.73478 3 9 3C9.26522 3 9.51957 2.89464 9.70711 2.70711Z"
                      stroke="#364152"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.7071 2.70711C16.8946 2.51957 17 2.26522 17 2C17 1.73478 16.8946 1.48043 16.7071 1.29289C16.5196 1.10536 16.2652 1 16 1C15.7348 1 15.4804 1.10536 15.2929 1.29289C15.1054 1.48043 15 1.73478 15 2C15 2.26522 15.1054 2.51957 15.2929 2.70711C15.4804 2.89464 15.7348 3 16 3C16.2652 3 16.5196 2.89464 16.7071 2.70711Z"
                      stroke="#364152"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </td>
            </tr>
          {/* ); */}
        {/* })} */}
      </tbody>
   );
  }
}

export default FilesDetails;
