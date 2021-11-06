import React from 'react';

// Components
import VersionIcon from '@mui/icons-material/Filter1Outlined';
import LinkIcon from '@mui/icons-material/InsertLinkOutlined';
import NewIcon from '@mui/icons-material/FiberNewOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import ChangelogRow from './ChangelogRow/ChangelogRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import CodeIcon from '@mui/icons-material/Code';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';

// Styles
import * as naming from '../../constants/styles';
import './Changelog.css';

// Constants
import { data } from '../../constants/data';

const Changelog = () => {
    return (
        <section className={naming.CHANGELOG.base}>
            <h2>Changelog :</h2>
            <Table className={naming.CHANGELOG.table}>
                <TableHead>
                    <TableRow>
                        <TableCell><CodeIcon />SUJETS</TableCell>
                        <TableCell><VersionIcon />VERSIONS</TableCell>
                        <TableCell><InfoIcon />CHANGEMENT</TableCell>
                        <TableCell><NewIcon />NOUVEAUTÉ</TableCell>
                        <TableCell><LinkIcon />LIENS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((infos, index) => 
                        <ChangelogRow data={infos}key={index} />
                    )}
                </TableBody>
            </Table>
        </section>
    );
};

export default Changelog;
