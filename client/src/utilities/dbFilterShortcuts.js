export default {
    $exists: { $exists: true, $ne: null },
    $null: { $type: 10 },
    $isntEmptyArray: { $exists: true, $ne: [] },
}