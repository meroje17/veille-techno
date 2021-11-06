import React from 'react';
import { object } from 'prop-types';

// Styles
import * as naming from '../../../constants/styles';
import './ChangelogRow.css';

// Components
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const ChangelogRow = ({ data }) => {
    const { subject, versions } = data;

    const versionIds = versions.map((infos) => infos.version);
    const links = versions.map((infos) => infos.link);

    return (
        <TableRow>
            <TableCell className={naming.CHANGELOG.cell}>
                {subject}
            </TableCell>
            <TableCell className={naming.CHANGELOG.cell}>
                {versionIds.map((versionId, index) => 
                    <span key={index}>Version {versionId}<br /></span>
                )}
            </TableCell>
            <TableCell>
                {versions.map((_, index) => 
                    <div className={naming.CHANGELOG.badgeMajor} key={index}>
                        MAJEUR
                    </div>
                )}
            </TableCell>
            <TableCell>
                {versions.map((_, index) => 
                    <div className={naming.CHANGELOG.badgeNew} key={index}>
                        NEW
                    </div>
                )}
            </TableCell>
            <TableCell className={naming.CHANGELOG.cell}>
                {links.map((link, index) => 
                    <span key={index}><a href={link} rel='noreferrer' target='_blank'>lien</a><br /></span>
                )}
            </TableCell>
        </TableRow>
    );
};

ChangelogRow.propTypes = {
    data: object,
};

export default ChangelogRow;
