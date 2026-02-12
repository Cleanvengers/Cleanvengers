// App.js - المحرك البرمجي لـ Cleanvengers
const supabaseUrl = 'https://jnbiktezhuvenbvpzabo.supabase.co';
const supabaseKey = 'sb_publishable_AUt0UNAWgYMO7dQ5rIOzsg_NxXd1OcE'; 
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// دالة لجلب البيانات وعرضها (Dashboard)
async function fetchVisits() {
    const { data, error } = await _supabase
        .from('visits')
        .select('*')
        .order('updated_at', { ascending: false });

    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Visits loaded:', data);
        // هنا يمكنك إضافة كود لتحديث الـ HTML بالبيانات
    }
}

// دالة تحديث الحالة (للعامل)
async function updateVisitStatus(visitId, newStatus, currentVersion) {
    const { data, error } = await _supabase
        .from('visits')
        .update({ 
            status: newStatus, 
            status_version: currentVersion + 1 
        })
        .eq('id', visitId)
        .eq('status_version', currentVersion);

    if (error) {
        alert("فشل التحديث: قد يكون هناك تعديل آخر تم");
    } else {
        alert("تم تحديث الحالة بنجاح!");
        fetchVisits();
    }
}

document.addEventListener('DOMContentLoaded', fetchVisits);