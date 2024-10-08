import {
  Box,
  IconButton,
  InputLabel,
  OutlinedInput,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from "@mui/material";
import { useEffect, useState } from "react";
import { IHeader } from "./interfaces";
import {
  CloseCircleOutlined,
  EditOutlined,
  EyeOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

interface TableComponentProps<T> {
  data: (T & { id: string })[];
  header: IHeader[];
  count: number;
  baseUrl: string;
  defaultSearch?: string;
  canSearch?: boolean;
  canEdit?: boolean;
  handleOnDelete?: (id: string )=>void;
  getData: (limit: number, offset: number, q: (string | undefined))=> void;
};

export const TableComponent = <T extends Object>({
  header,
  data,
  count,
  baseUrl,
  defaultSearch="",
  canSearch= true,
  canEdit=true,
  getData,
  handleOnDelete,
}: TableComponentProps<T>) => {

  const [ page, setPage ] = useState(0);
  const [ limit, setLimit ] = useState(5);
  const [ q, setQ ] = useState<string>(defaultSearch);

  useEffect(()=>{
    getData(limit, page, q);
  }, [ page, limit, q ]);
  return (
    <>
      {
        canSearch &&
        <Stack direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={ 1 }>
          <InputLabel>
            Buscar
          </InputLabel>
          <OutlinedInput type="text"
            onChange={
              (event) => setQ(event.target.value)
            }
          />
        </Stack>
      }
      <Box>
        <TableContainer
          sx={{
            width: '100%',
            overflowX: 'auto',
            position: 'relative',
            display: 'block',
            maxWidth: '100%',
            '& td, & th': { whiteSpace: 'nowrap' }
          }}
        >
          <Table
            aria-labelledby="tableTitle"
            sx={{
              '& .MuiTableCell-root:first-of-type': {
                pl: 2
              },
              '& .MuiTableCell-root:last-of-type': {
                pr: 3
              }
            }}
          >
            <TableHead>
              <TableRow>
                {
                  header.map(row => {
                    return (
                      <TableCell key={ row.id } align="center">
                        { row.label }
                      </TableCell>
                    );
                  })
                }

                <TableCell key={ new Date().getTime() }>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data &&
                data.map(dt => {
                  return (
                    <TableRow key={dt.id}>
                      {
                        header.map( row => {
                          return (
                            // @ts-ignore
                            <TableCell key={ `${row.id}-${dt[row.id]}`}
                              align="center">
                              {
                                // @ts-ignore
                                dt[row.id]
                              }
                            </TableCell>
                          );
                        })
                      }
                      <TableCell key={`${dt.id}-opts`}>
                        <IconButton size="large"
                          color="primary"
                          component={ Link }
                          to = { `${baseUrl}/${dt['id']}` }
                          >
                          <EyeOutlined />
                        </IconButton>
                        {
                          canEdit &&
                          <IconButton size="large"
                            color="primary"
                            component={ Link }
                            to = { `${baseUrl}/edit/${dt['id']}`}
                            >
                            <EditOutlined />
                          </IconButton>
                        }
                        {
                          handleOnDelete &&
                          <IconButton size="large"
                            color="primary"
                            onClick={()=>{
                                handleOnDelete(dt['id'])
                            }}>
                            <CloseCircleOutlined />
                          </IconButton>
                        }
                      </TableCell>
                    </TableRow>
                  );
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Stack alignItems={"center"}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
            component="div"
            count={ count }
            rowsPerPage={ limit }
            page={ page }
            onPageChange={ (_event, p) => { setPage(p) }}
            onRowsPerPageChange={ (event)=>{
              setLimit(+event.target.value);
              setPage(0);
            } }
            labelRowsPerPage={ 'Filas por página: ' }
          />
        </Stack>
      </Box>
    </>
  );
};
