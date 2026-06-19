import{u as d}from"./index-DM6oDKcI.js";function _(e){var r;return((r=e.preferred_label)==null?void 0:r.trim())||`${e.source}:${e.identifier}`}function s(){const{query:e}=d();async function r(){return e(`
      SELECT
        c.id,
        c.source,
        c.identifier,
        c.cui,
        c.preferred_label,
        c.definition,
        c.alt_labels,
        count(DISTINCT r.cde_id) AS cde_count
      FROM concept c
      LEFT JOIN cde_represents_concept r ON r.concept_id = c.id
      GROUP BY c.id, c.source, c.identifier, c.cui, c.preferred_label, c.definition, c.alt_labels
      ORDER BY cde_count DESC, c.source, c.identifier
    `)}async function n(c){return(await e(`
      SELECT
        c.id, c.source, c.identifier, c.cui,
        c.preferred_label, c.definition, c.alt_labels,
        count(DISTINCT r.cde_id) AS cde_count
      FROM concept c
      LEFT JOIN cde_represents_concept r ON r.concept_id = c.id
      WHERE c.id = ?
      GROUP BY c.id, c.source, c.identifier, c.cui, c.preferred_label, c.definition, c.alt_labels
    `,[c]))[0]??null}async function i(c){return e(`
      SELECT
        f.cde_id,
        f.cde_name,
        f.variable_name,
        f.cde_data_type,
        f.bundle_name,
        f.bundle_domain,
        r.role
      FROM cde_represents_concept r
      JOIN cde_full f ON f.cde_id = r.cde_id
      WHERE r.concept_id = ?
      ORDER BY r.role, f.cde_name
    `,[c])}async function t(c){return e(`
      SELECT
        c.id, c.source, c.identifier, c.cui,
        c.preferred_label, c.definition,
        r.role
      FROM cde_represents_concept r
      JOIN concept c ON c.id = r.concept_id
      WHERE r.cde_id = ?
      ORDER BY r.role, c.source, c.identifier
    `,[c])}return{listConcepts:r,getConcept:n,getCdesForConcept:i,getConceptsForCde:t}}export{_ as c,s as u};
